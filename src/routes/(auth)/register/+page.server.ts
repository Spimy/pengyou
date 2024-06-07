import { lucia } from '$lib/server/auth';
import { User } from '$lib/server/database/schema/auth';
import { hashConfig, isValidEmail, isValidPassword } from '$lib/utils';
import { hash } from '@node-rs/argon2';
import { fail, redirect } from '@sveltejs/kit';
import { generateIdFromEntropySize } from 'lucia';
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

		await User.create({
			_id: userId,
			email,
			username,
			hashed_password: hashedPassword,
			currency: 'MYR'
		});

		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);

		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '/',
			...sessionCookie.attributes
		});

		return redirect(302, '/home');
	}
} satisfies Actions;
