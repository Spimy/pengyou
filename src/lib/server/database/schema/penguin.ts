import mongoose, { Model, model, Schema } from 'mongoose';

interface IPenguin {
	happiness: number;
	hunger: number;
	spriteSheetId: string;
	backgroundId: string;
	ownerId: string;
}

const penguinSchema = new Schema<IPenguin>({
	happiness: { type: Number, required: true, min: 0, max: 100, default: 50 },
	hunger: { type: Number, required: true, min: 0, max: 100, default: 50 },
	spriteSheetId: { type: String, required: true, default: 'penguin_default' },
	backgroundId: { type: String, required: true, default: 'snowy' },
	ownerId: { type: String, required: true }
});

export const Penguin =
	(mongoose.models.penguins as Model<IPenguin>) || model<IPenguin>('penguins', penguinSchema);
