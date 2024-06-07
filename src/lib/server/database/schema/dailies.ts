import mongoose, { model, Schema } from 'mongoose';

interface IDaily {
	userId: string;
	addedTransaction: boolean;
	fedPengyou: boolean;
	readAiTip: boolean;
}

function getExpirationSeconds(): number {
	const expirationDate = new Date();
	expirationDate.setHours(24, 0, 0, 0);

	const expirationSeconds = Math.ceil((expirationDate.getTime() - Date.now()) / 1000);
	return expirationSeconds;
}

const dailyLoginSchema = new Schema<IDaily>(
	{
		userId: { type: String, required: true },
		addedTransaction: { type: Boolean, required: true, default: false },
		fedPengyou: { type: Boolean, required: true, default: false },
		readAiTip: { type: Boolean, required: true, default: false }
	} as const,
	{ timestamps: { createdAt: true } }
).index({ createdAt: 1 }, { expireAfterSeconds: getExpirationSeconds() });

export const Daily = mongoose.models.dailies || model<IDaily>('dailies', dailyLoginSchema);
