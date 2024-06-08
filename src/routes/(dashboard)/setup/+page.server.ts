import { User } from '$lib/server/database/schema/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	setupProfile: async ({ locals, request }) => {
		const user = locals.user!;

		const formData = await request.formData();
		const income = formData.get('income');
		const dailyExpenses = formData.get('expenses');
		const currency = formData.get('displayCurrency') as string;
		const monthlyBudget = formData.get('budget');

		if (typeof income !== 'string' || isNaN(parseInt(income))) {
			return fail(400, { message: 'Invalid income' });
		}

		if (typeof dailyExpenses !== 'string' || isNaN(parseInt(dailyExpenses))) {
			return fail(400, { message: 'Invalid daily expenses' });
		}

		if (typeof monthlyBudget !== 'string' || isNaN(parseInt(monthlyBudget))) {
			return fail(400, { message: 'Invalid monthly budget' });
		}

		const newUser = (await User.findOne({ _id: user.id }).exec())!;
		newUser.monthlyIncome = parseInt(income);
		newUser.dailyExpenses = parseInt(dailyExpenses);
		newUser.currency = currency;
		newUser.monthlyBudget = parseInt(monthlyBudget);
		await newUser.save();

		return redirect(302, '/home');
	}
} satisfies Actions;
