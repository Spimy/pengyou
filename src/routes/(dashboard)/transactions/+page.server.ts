import { User } from '$lib/server/database/schema/auth';
import { Daily } from '$lib/server/database/schema/dailies';
import { Transaction } from '$lib/server/database/schema/transactions';
import { jsonModel } from '$lib/server/gemini';
import { ITransactionType, PENGUCOINS_PER_COMMISSION } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user!;
	const transactions = await Transaction.find({ userId: user.id }).lean().exec();
	return { user, transactions: transactions.map((t) => ({ ...t, _id: t._id.toHexString() })) };
};

export const actions = {
	addTransaction: async ({ request, locals }) => {
		const user = locals.user!;
		const formData = await request.formData();

		const title = formData.get('title');
		const amount = formData.get('amount');
		const transactionType = formData.get('type') as ITransactionType;

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

		// Add PenguCoins to user as daily commission
		const daily = await Daily.findOne({ userId: user.id }).exec();
		if (!daily || daily.addedTransaction) return;

		daily.addedTransaction = true;
		await daily.save();

		await User.updateOne(
			{ _id: user.id },
			{ penguCoins: user.penguCoins + PENGUCOINS_PER_COMMISSION }
		);
	}
} satisfies Actions;
