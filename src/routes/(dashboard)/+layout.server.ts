import { User } from '$lib/server/database/schema/auth';
import { Daily } from '$lib/server/database/schema/dailies';
import { Penguin } from '$lib/server/database/schema/penguin';
import { PENGUCOINS_PER_COMMISSION } from '$lib/utils';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

function generateRandomNumber(diff: number): number {
	// Check if the difference is less than 6 hours (in milliseconds)
	if (diff < 6 * 60 * 60 * 1000) {
		return 0;
	}

	let min: number;
	let max: number;

	const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
	const oneWeek = 7 * oneDay; // milliseconds in a week
	const oneMonth = 30 * oneDay; // approximate milliseconds in a month

	if (diff < oneDay) {
		min = 1;
		max = 20;
	} else if (diff < oneWeek) {
		min = 10;
		max = 30;
	} else if (diff < oneMonth) {
		min = 20;
		max = 50;
	} else {
		min = 40;
		max = 100;
	}

	// Generate a random number between min and max, inclusive
	const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomNumber;
}

export const load: LayoutServerLoad = async ({ locals, cookies }) => {
	if (!locals.user || !locals.session) throw redirect(301, '/register');
	const user = locals.user;

	const lastAccessCookie = cookies.get('lastAccess');
	if (lastAccessCookie) {
		const lastAccess = new Date(lastAccessCookie);
		const diff = Date.now() - lastAccess.getTime();

		const happinessDecrease = generateRandomNumber(diff);
		const hungerIncrease = generateRandomNumber(diff);

		const penguin = (await Penguin.findOne({ ownerId: user.id }).exec())!;
		if (penguin.happiness - happinessDecrease <= 0) {
			penguin.happiness = 100;
		} else {
			penguin.happiness -= happinessDecrease;
		}

		if (penguin.hunger + hungerIncrease >= 100) {
			penguin.hunger = 0;
		} else {
			penguin.hunger += hungerIncrease;
		}

		await penguin.save();
	} else {
		cookies.set('lastAccess', new Date().toISOString(), {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			secure: false
		});
	}

	/**
	 * Henceforth, the user is considered authenticated.
	 *
	 * The user can do the daily login task if the server has reset (at midnight)
	 * and has not already logged in.
	 */
	const hasLoggedIn = !!(await Daily.findOne({ userId: user.id }).exec());
	if (hasLoggedIn) return;

	// Add PenguCoins for logging in
	await Daily.create({ userId: user.id });
	await User.updateOne(
		{ _id: user.id },
		{ penguCoins: user.penguCoins + PENGUCOINS_PER_COMMISSION }
	);
};
