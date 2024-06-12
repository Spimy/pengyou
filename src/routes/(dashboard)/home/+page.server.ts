import { User } from '$lib/server/database/schema/auth';
import { Daily } from '$lib/server/database/schema/dailies';
import { Penguin } from '$lib/server/database/schema/penguin';
import { Transaction } from '$lib/server/database/schema/transactions';
import { jsonModel, textModel } from '$lib/server/gemini';
import { PENGUCOINS_PER_COMMISSION, storeItems } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, cookies }) => {
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
		name: storeItems.foods.find((fs) => fs.id === f.id)!.name,
		img: storeItems.foods.find((fs) => fs.id === f.id)!.img
	}));
	const items = user.inventory.items.map((f) => ({
		...f,
		name: storeItems.items.find((fs) => fs.id === f.id)!.name,
		img: storeItems.items.find((fs) => fs.id === f.id)!.img
	}));
	const backgrounds = user.inventory.backgrounds.map((f) => ({
		...f,
		name: storeItems.backgrounds.find((fs) => fs.id === f.id)!.name,
		img: storeItems.backgrounds.find((fs) => fs.id === f.id)!.img
	}));
	const inventory = { foods, items, backgrounds };

	const transactionz = await Transaction.find({ userId: user.id }).lean().exec();
	const daily = await Daily.findOne({ userId: user.id }).lean().exec();
	const penguin = await Penguin.findOne({ ownerId: user.id }).lean().exec();

	return {
		user,
		tip,
		inventory,
		daily: daily ? { ...daily, _id: daily._id.toHexString() } : undefined,
		transactions: transactionz.map((t) => ({ ...t, _id: t._id.toHexString() })),
		skin: penguin?.spriteSheetId ?? 'penguin-default',
		bg: penguin?.backgroundId ?? 'background-default'
	};
};

export const actions = {
	inventory: async ({ locals, url, cookies }) => {
		const user = locals.user!;

		const itemId = url.searchParams.get('item') as string;
		const itemType = url.searchParams.get('type') as keyof typeof storeItems;
		const storeItem = storeItems[itemType].find((f) => f.id === itemId)!;

		const newUser = (await User.findOne({ _id: user.id }).exec())!;
		const penguin = (await Penguin.findOne({ ownerId: user.id }).exec())!;

		const index = newUser.inventory[itemType].findIndex((f) => f.id === itemId);

		if (itemType === 'items') {
			await Penguin.updateOne({ ownerId: user.id }, { spriteSheetId: `penguin-${itemId}` }).exec();
		}

		if (itemType === 'backgrounds') {
			await Penguin.updateOne(
				{ ownerId: user.id },
				{ backgroundId: `background-${itemId}` }
			).exec();
		}

		if (index < 0 || newUser.inventory[itemType][index].amount <= 0)
			return fail(400, { message: 'You do not have this item.' });

		penguin.happiness += storeItem.happinessRefill;
		penguin.hunger -= storeItem.hungerRefill;
		if (!storeItem.permanent) newUser.inventory[itemType][index].amount -= 1;

		await newUser.updateOne({ inventory: newUser.inventory }).exec();
		await penguin.save();

		if (itemType === 'foods') {
			const daily = await Daily.findOne({ userId: user.id }).exec();
			if (daily && !daily.fedPengyou) {
				daily.fedPengyou = true;
				await daily.save();

				newUser.penguCoins = newUser.penguCoins! + PENGUCOINS_PER_COMMISSION;
				await newUser.save();
			}
		}
	}
} satisfies Actions;
