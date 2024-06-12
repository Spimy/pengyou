import { User } from '$lib/server/database/schema/auth';
import { Daily } from '$lib/server/database/schema/dailies';
import { PENGUCOINS_PER_COMMISSION } from '$lib/utils';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user || !locals.session) throw redirect(301, '/register');

	/**
	 * Henceforth, the user is considered authenticated.
	 *
	 * The user can do the daily login task if the server has reset (at midnight)
	 * and has not already logged in.
	 */
	const user = locals.user;
	const hasLoggedIn = !!(await Daily.findOne({ userId: user.id }).exec());
	if (hasLoggedIn) return;

	// Add PenguCoins for logging in
	await Daily.create({ userId: user.id });
	await User.updateOne(
		{ _id: user.id },
		{ penguCoins: user.penguCoins + PENGUCOINS_PER_COMMISSION }
	);
};
