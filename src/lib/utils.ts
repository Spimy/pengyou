export function isValidEmail(email: string): boolean {
	return /.+@.+/.test(email);
}

export function isValidPassword(password: string): boolean {
	return password.length >= 6 && password.length <= 255;
}

export const hashConfig = {
	// recommended minimum parameters
	memoryCost: 19456,
	timeCost: 2,
	outputLen: 32,
	parallelism: 1
};

export enum ITransactionType {
	INCOME = 'income',
	EXPENSE = 'expense'
}
