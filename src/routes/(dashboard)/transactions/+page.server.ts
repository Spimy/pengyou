import { User as UserDoc } from '$lib/server/database/schema/auth';
import { Daily } from '$lib/server/database/schema/dailies';
import { Transaction } from '$lib/server/database/schema/transactions';
import { jsonModel } from '$lib/server/gemini';
import { ITransactionType, PENGUCOINS_PER_COMMISSION } from '$lib/utils';
import { fail, redirect } from '@sveltejs/kit';
import type { User } from 'lucia';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user!;
	const transactions = await Transaction.find({ userId: user.id })
		.sort('-created_at')
		.lean()
		.exec();
	return { user, transactions: transactions.map((t) => ({ ...t, _id: t._id.toHexString() })) };
};

async function fileToGenerativePart(file: File) {
	return {
		inlineData: {
			data: Buffer.from(await file.arrayBuffer()).toString('base64'),
			mimeType: file.type
		}
	};
}

async function updateDailyTransaction(user: User) {
	// Add PenguCoins to user as daily commission
	const daily = await Daily.findOne({ userId: user.id }).exec();
	if (!daily || daily.addedTransaction) return { message: 'Added transaction' };

	daily.addedTransaction = true;
	await daily.save();

	await UserDoc.updateOne(
		{ _id: user.id },
		{ penguCoins: user.penguCoins + PENGUCOINS_PER_COMMISSION }
	);
}

export const actions = {
	addTransaction: async ({ request, locals }) => {
		const user = locals.user!;
		const formData = await request.formData();

		const title = formData.get('title');
		const amount = formData.get('amount');
		const transactionType = formData.get('displayType') as ITransactionType;

		if (typeof title !== 'string') {
			return fail(400, { message: 'Invalid title' });
		}

		if (typeof amount !== 'string' || isNaN(parseInt(amount))) {
			return fail(400, { message: 'Invalid amount' });
		}

		const amountInt = parseInt(amount);

		let category: string | undefined = undefined;
		if (transactionType === ITransactionType.EXPENSE) {
			const categoryRes = await jsonModel.generateContent(
				`${title} ${user.currency} ${amount}, ${new Date().toDateString()}. Based on this expense, choose the category of this expense based the following list: Entertainment, Food & Beverage, Transport, Rent, Utility Bills, Miscellaneous. Output in the format: {expenseCategory: string}`
			);
			category = JSON.parse(categoryRes.response.text()).expenseCategory;
		}

		await Transaction.create({
			title,
			amount: amountInt,
			transactionType: transactionType,
			category: category,
			userId: user.id
		});

		await updateDailyTransaction(user);
		return { message: 'Added transaction' };
	},
	ocr: async ({ locals, request, url }) => {
		const user = locals.user!;

		const formData = await request.formData();
		const receipt = formData.get('receipt');
		const redirectTo = url.searchParams.get('redirect');

		if (!(receipt as File).name || (receipt as File).name === 'undefined') {
			return fail(400, {
				error: true,
				message: 'You must provide a receipt to upload'
			});
		}

		const prompt =
			'Based on this expense, choose the category of this expense based the following list: Entertainment, Food & Beverage, Transport, Rent, Utility Bills, Miscellaneous. Set that as {category: string}. What is this receipt for? Set that as {description: string}. What is the total paid? Set that as {total: number}';
		const file = receipt as File;

		try {
			const result = await jsonModel.generateContent([prompt, await fileToGenerativePart(file)]);
			const receiptJson = JSON.parse(result.response.text()) as {
				category: string;
				description: string;
				total: number;
			};

			await Transaction.create({
				userId: user.id,
				amount: receiptJson.total,
				transactionType: ITransactionType.EXPENSE,
				category: receiptJson.category,
				title: receiptJson.description
			});
		} catch (e) {
			console.error(e);
			return fail(500, { message: 'Rate limited. Please try again.' });
		}

		await updateDailyTransaction(user);
		return redirect(302, redirectTo!);
	}
} satisfies Actions;
