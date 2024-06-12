import { lucia } from '$lib/server/auth';
import { User } from '$lib/server/database/schema/auth';
import { Penguin } from '$lib/server/database/schema/penguin';
import { hashConfig, isValidEmail, isValidPassword } from '$lib/utils';
import { hash } from '@node-rs/argon2';
import { fail, redirect } from '@sveltejs/kit';
import { generateIdFromEntropySize } from 'lucia';
import mongoose from 'mongoose';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {};

export const actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const username = formData.get('username');
		const password = formData.get('password');

		if (typeof email === 'string' && !isValidEmail(email)) {
			return fail(400, {
				message: 'Invalid email'
			});
		}

		if (typeof username !== 'string') {
			return fail(400, {
				message: 'Invalid username'
			});
		}

		if (typeof password !== 'string' || !isValidPassword(password)) {
			return fail(400, {
				message: 'Invalid password'
			});
		}

		const userExists = !!(await User.findOne({ email }).exec());
		if (userExists) {
			return fail(400, {
				message: 'This email has already been registered'
			});
		}

		const userId = generateIdFromEntropySize(10); // 16 characters long
		const hashedPassword = await hash(password, hashConfig);

		const mongoSession = await mongoose.startSession();

		await mongoSession.withTransaction(async () => {
			await User.create({
				_id: userId,
				email,
				username,
				hashed_password: hashedPassword,
				currency: 'MYR',
				inventory: {
					foods: [],
					items: [
						{ id: 'default', amount: 1 },
						{ id: 'golden-spoon', amount: 1 }
					],
					backgrounds: [{ id: 'default', amount: 1 }]
				}
			});

			await Penguin.create({ ownerId: userId });
		});

		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);

		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '/',
			...sessionCookie.attributes
		});

		return redirect(302, '/setup');
	}
} satisfies Actions;
