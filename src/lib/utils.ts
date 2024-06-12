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

export const PENGUCOINS_PER_COMMISSION = 10;

// ! Hardcoding the store because it will not change for the sake of the hackathon
// ! Realistically will be in database
export const storeItems = {
	foods: [
		{
			id: 'fish',
			name: 'Fish',
			cost: 20,
			hungerRefill: 10,
			happinessRefill: 0,
			img: '/items/item-fish.png',
			permanent: false
		},
		{
			id: 'ice-cream',
			name: 'Ice Cream',
			cost: 20,
			hungerRefill: 5,
			happinessRefill: 0,
			img: '/items/item-ice.png',
			permanent: false
		}
	],
	items: [
		{
			id: 'default',
			name: 'Default Skin',
			cost: 0,
			hungerRefill: 0,
			happinessRefill: 0,
			img: '/casual-penguin.png',
			permanent: true
		},
		{
			id: 'golden-spoon',
			name: 'Golden Spoon',
			cost: 0,
			hungerRefill: 0,
			happinessRefill: 15,
			img: '/items/item-spoon.png',
			permanent: true
		}
	],
	backgrounds: [
		{
			id: 'snowy',
			name: 'Snowy',
			cost: 0,
			hungerRefill: 0,
			happinessRefill: 0,
			img: '/items/item-defaultback.png',
			permanent: true
		},
		{
			id: 'beach',
			name: 'Beach',
			cost: 160,
			hungerRefill: 0,
			happinessRefill: 0,
			img: '/items/item-beachback.png',
			permanent: true
		}
	]
};
