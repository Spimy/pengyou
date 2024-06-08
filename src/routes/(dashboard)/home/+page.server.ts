import { User } from '$lib/server/database/schema/auth';
import { Daily } from '$lib/server/database/schema/dailies';
import { Transaction } from '$lib/server/database/schema/transactions';
import { textModel } from '$lib/server/gemini';
import { PENGUCOINS_PER_COMMISSION } from '$lib/utils';
import type { PageServerLoad } from './$types';

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
			category: t.category
		};
	});

	let tip: string | undefined = undefined;
	try {
		const tipResponse = await textModel.generateContent(
			`Max budget per month: ${user.currency} ${user.monthlyBudget}. List of transactions for the past week: ${JSON.stringify(formattedTransactions)}\n\nBased on those transactions, provide a short tip of about 40 words to improve spending habits and to better manage expenses, as a virtual pet penguin called Pengyou. Pengyou speaks in third person. Use a cutesy and happy tone while being very educational. Try playing into empathy.`
		);
		tip = tipResponse.response.text() as string;

		const daily = await Daily.findOne({ userId: user.id }).exec();

		if (daily && !daily.readAiTip) {
			daily.readAiTip = true;
			await daily.save();

			const newUser = (await User.findOne({ _id: user.id }).exec())!;
			newUser.penguCoins = newUser.penguCoins! + PENGUCOINS_PER_COMMISSION;
			await newUser.save();
		}
	} catch {}

	return { user, tip };
};
