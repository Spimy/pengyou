import { ITransactionType } from '$lib/utils';
import { model, Schema } from 'mongoose';

interface ITransactions {
	title: string;
	amount: number;
	transactionType: ITransactionType;
	category?: string;
	userId: string;
	created_at?: Date;
}

const transactionsSchema = new Schema<ITransactions>({
	title: { type: String, required: true },
	amount: { type: Number, required: true },
	transactionType: { type: String, required: true, enum: Object.values(ITransactionType) },
	category: { type: String, required: false },
	userId: { type: String, required: true, ref: 'users' },
	created_at: { type: Date, required: true, default: () => Date.now() }
} as const);

export const Transaction = model<ITransactions>('transactions', transactionsSchema);
