import { User } from '$lib/server/database/schema/auth';
import { Daily } from '$lib/server/database/schema/dailies';
import { Penguin } from '$lib/server/database/schema/penguin';
import { Transaction } from '$lib/server/database/schema/transactions';
import { jsonModel, textModel } from '$lib/server/gemini';
import { PENGUCOINS_PER_COMMISSION, storeItems,ITransactionType } from '$lib/utils';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

async function fileToGenerativePart(file: File) {
	return {
		inlineData: {
			data: Buffer.from(await file.arrayBuffer()).toString('base64'),
			mimeType: file.type
		}
	};
}

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user!;

	// Use past week transactions to generate tips
	const weekAgo = new Date();
	weekAgo.setDate(weekAgo.getDate() - 7);

	const transactions = await Transaction.find({
		userId: user.id,
		created_at: {
			$gte: weekAgo,
			$lt: new Date()
		}
	})
		.lean()
		.exec();

	const formattedTransactions = transactions.map((t) => {
		return {
			title: t.title,
			amount: t.amount,
			transactionType: t.transactionType,
			category: t.category,
			date: t.created_at
		};
	});

	let tip: string | undefined = undefined;
	try {
		const defaultPrompt = `Max budget per month: ${user.currency} ${user.monthlyBudget}. My monthly income: ${user.currency} ${user.monthlyIncome}. My guesstimated daily expense: ${user.currency} ${user.dailyExpenses}. List of transactions for the past week: ${JSON.stringify(formattedTransactions)}\n\n`;
		const tipResponse = await textModel.generateContent(
			`${defaultPrompt}Based on those transactions, provide a short tip of about 40 words to improve spending habits and to better manage expenses, as a virtual pet penguin called Pengyou. Pengyou speaks in third person. Use a cutesy and happy tone while being very educational. Try playing into empathy.`
		);
		tip = `${tipResponse.response.text()}`;

		const newUser = (await User.findOne({ _id: user.id }).exec())!;

		if (formattedTransactions.length > 0) {
			const newDailyExpenseResponse = await jsonModel.generateContent(
				`${defaultPrompt}Based on those transactions, calculate an average daily expense. Generate the data in the format: {dailyExpense: number}`
			);
			const newDailyExpense = JSON.parse(newDailyExpenseResponse.response.text()).dailyExpense;
			newUser.dailyExpenses = newDailyExpense;
			tip += `Your newly calculated daily expense is ${user.currency} ${newDailyExpense.toFixed(2)}`;
		}

		const daily = await Daily.findOne({ userId: user.id }).exec();
		if (daily && !daily.readAiTip) {
			daily.readAiTip = true;
			await daily.save();

			newUser.penguCoins = newUser.penguCoins! + PENGUCOINS_PER_COMMISSION;
		}

		await newUser.save();
	} catch {}

	const foods = user.inventory.foods.map((f) => ({
		...f,
		name: storeItems.foods.find((fs) => fs.id === f.id)!.name
	}));
	const items = user.inventory.items.map((f) => ({
		...f,
		name: storeItems.items.find((fs) => fs.id === f.id)!.name
	}));
	const backgrounds = user.inventory.backgrounds.map((f) => ({
		...f,
		name: storeItems.backgrounds.find((fs) => fs.id === f.id)!.name
	}));
	const inventory = { foods, items, backgrounds };

	return { user, tip, inventory };
};

export const actions = {
	ocr: async ({ locals, request }) => {
		const user = locals.user!;

		const formData = await request.formData();
		const receipt = formData.get('receipt');

		if (!(receipt as File).name || (receipt as File).name === 'undefined') {
			return fail(400, {
				error: true,
				message: 'You must provide a receipt to upload'
			});
		}

		const prompt =
			'Based on this expense, choose the category of this expense based the following list: Entertainment, Food & Beverage, Transport, Rent, Utility Bills, Miscellaneous. Set that as {category: string}. What is this receipt for? Set that as {description: string}. What is the total paid? Set that as {total: number}';
		const file = receipt as File;

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

		redirect(300,"/transactions")
	},
	inventory: async ({ locals, url }) => {
		const user = locals.user!;

		const itemId = url.searchParams.get('item') as string;
		const itemType = url.searchParams.get('type') as keyof typeof storeItems;
		const storeItem = storeItems[itemType].find((f) => f.id === itemId)!;

		const newUser = (await User.findOne({ _id: user.id }).exec())!;
		const penguin = (await Penguin.findOne({ ownerId: user.id }).exec())!;

		const index = newUser.inventory[itemType].findIndex((f) => f.id === itemId);
		if (index < 1 || newUser.inventory[itemType][index].amount <= 0)
			return fail(400, { message: 'You do not have this item.' });

		penguin.happiness += storeItem.happinessRefill;
		penguin.hunger -= storeItem.hungerRefill;
		newUser.inventory[itemType][index].amount -= 1;

		await penguin.save();

		if (itemType === 'foods') {
			const daily = await Daily.findOne({ userId: user.id }).exec();
			if (daily && !daily.fedPengyou) {
				daily.fedPengyou = true;
				await daily.save();

				newUser.penguCoins = newUser.penguCoins! + PENGUCOINS_PER_COMMISSION;
				await newUser.save();
			}
		} else {
			await newUser.save();
		}

		return redirect(302, '/transaction');
	}
} satisfies Actions;
