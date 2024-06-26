import { dev } from '$app/environment';
import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';
import { Lucia, TimeSpan } from 'lucia';
import mongoose from 'mongoose';

const adapter = new MongodbAdapter(
	mongoose.connection.collection('sessions'),
	mongoose.connection.collection('users')
);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: !dev
		}
	},
	sessionExpiresIn: new TimeSpan(1, 'd'),
	getUserAttributes: (attributes) => {
		return {
			username: attributes.username,
			email: attributes.email,
			currency: attributes.currency,
			monthlyBudget: attributes.monthlyBudget,
			monthlyIncome: attributes.monthlyIncome,
			dailyExpenses: attributes.dailyExpenses,
			penguCoins: attributes.penguCoins,
			inventory: attributes.inventory
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			username: string;
			email: string;
			currency: string;
			monthlyBudget: number;
			monthlyIncome: number;
			dailyExpenses: number;
			penguCoins: number;
			inventory: {
				foods: { id: string; amount: number }[];
				items: { id: string; amount: number }[];
				backgrounds: { id: string; amount: number }[];
			};
		};
	}
}
