import { User } from '$lib/server/database/schema/auth';
import { storeItems } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { storeItems };
};

export const actions = {
	store: async ({ locals, url }) => {
		const user = locals.user!;

		const itemId = url.searchParams.get('item') as string;
		const itemType = url.searchParams.get('type') as keyof typeof storeItems;
		const newUser = (await User.findOne({ _id: user.id }).exec())!;

		const storeItem = storeItems[itemType].find((f) => f.id === itemId)!;
		if (storeItem.cost > newUser.penguCoins!)
			return fail(400, { message: 'Not enough PenguCoins' });

		const index = newUser.inventory[itemType].findIndex((f) => f.id === itemId);
		if (index < 0) newUser.inventory[itemType].push({ id: itemId, amount: 1 });
		else newUser.inventory[itemType][index].amount += 1;

		newUser.penguCoins! -= storeItem.cost;
		await newUser.save();

		return { message: `You have bought ${storeItem.name} for ${storeItem.cost} PenguCoins` };
	}
} satisfies Actions;
