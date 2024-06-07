import { model, Schema } from 'mongoose';

interface IUser {
	_id: string;
	username: string;
	email: string;
	hashed_password: string;
}

const userSchema = new Schema<IUser>(
	{
		_id: { type: String, required: true },
		username: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		hashed_password: { type: String, required: true }
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

export const User = model<IUser>('users', userSchema);
export const Session = model<ISession>('sessions', sessionSchema);
