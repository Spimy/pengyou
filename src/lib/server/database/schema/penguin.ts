import { model, Schema } from 'mongoose';

interface IPenguin {
	happiness: number;
	hunger: number;
	spriteSheetId: string;
	ownerId: string;
}

const penguinSchema = new Schema<IPenguin>({
	happiness: { type: Number, required: true, min: 0, max: 100, default: 50 },
	hunger: { type: Number, required: true, min: 0, max: 100, default: 50 },
	spriteSheetId: { type: String, required: true, default: 'penguin_default' },
	ownerId: { type: String, required: true }
});

export const Penguin = model<IPenguin>('penguins', penguinSchema);
