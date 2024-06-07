import { lucia } from '$lib/server/auth';
import { verify } from '@node-rs/argon2';
import { fail, redirect } from '@sveltejs/kit';

import { User } from '$lib/server/database/schema/auth';
import { hashConfig, isValidEmail, isValidPassword } from '$lib/utils';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		if (typeof email !== 'string' || !isValidEmail(email)) {
			return fail(400, {
				message: 'Invalid email'
			});
		}
		if (typeof password !== 'string' || !isValidPassword(password)) {
			return fail(400, {
				message: 'Invalid password'
			});
		}

		const existingUser = await User.findOne({ email }).exec();
		if (!existingUser) {
			return fail(400, {
				message: 'Incorrect username or password'
			});
		}

		const validPassword = await verify(existingUser.hashed_password, password, hashConfig);
		if (!validPassword) {
			return fail(400, {
				message: 'Incorrect username or password'
			});
		}

		const session = await lucia.createSession(existingUser._id.toString(), {});
		const sessionCookie = lucia.createSessionCookie(session.id);

		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '/',
			...sessionCookie.attributes
		});

		return redirect(302, '/home');
	}
} satisfies Actions;
