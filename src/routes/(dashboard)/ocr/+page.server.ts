import { Transaction } from '$lib/server/database/schema/transactions';
import { jsonModel } from '$lib/server/gemini';
import { ITransactionType } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

async function fileToGenerativePart(file: File) {
	return {
		inlineData: {
			data: Buffer.from(await file.arrayBuffer()).toString('base64'),
			mimeType: file.type
		}
	};
}

export const actions = {
	default: async ({ locals, request }) => {
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
	}
} satisfies Actions;
