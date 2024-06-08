import mongoose, { Model, model, Schema } from 'mongoose';

interface Item {
	id: string;
	amount: number;
}

interface Inventory {
	foods: Item[];
	items: Item[];
	backgrounds: Item[];
}

interface IUser {
	_id: string;
	username: string;
	email: string;
	hashed_password: string;
	currency: string;
	monthlyBudget?: number;
	monthlyIncome?: number;
	dailyExpenses?: number;
	penguCoins?: number;
	inventory: Inventory;
}

const userSchema = new Schema<IUser>(
	{
		_id: { type: String, required: true },
		username: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		hashed_password: { type: String, required: true },
		currency: { type: String, required: true },
		monthlyBudget: { type: Number, required: true, default: 0 },
		monthlyIncome: { type: Number, required: true, default: 0 },
		dailyExpenses: { type: Number, required: true, default: 0 },
		penguCoins: { type: Number, required: true, default: 0 },
		inventory: {
			foods: [
				{
					id: { type: String, required: true },
					amount: { type: Number, required: true }
				}
			],
			items: [
				{
					id: { type: String, required: true },
					amount: { type: Number, required: true }
				}
			],
			backgrounds: [
				{
					id: { type: String, required: true },
					amount: { type: Number, required: true }
				}
			]
		}
	} as const,
	{ _id: false }
);

interface ISession {
	_id: string;
	user_id: string;
	active_expires: number;
}

const sessionSchema = new Schema<ISession>(
	{
		_id: { type: String, required: true },
		user_id: { type: String, required: true },
		active_expires: { type: Number, required: true }
	} as const,
	{ _id: false }
);

export const User = (mongoose.models.users as Model<IUser>) || model<IUser>('users', userSchema);
export const Session =
	(mongoose.models.sessions as Model<ISession>) || model<ISession>('sessions', sessionSchema);
