// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: import('lucia').User | null;
			session: import('lucia').Session | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Window {
		ApexCharts: typeof import('apexcharts');
		sadPengyou(): Function<any>;
		angryPengyou(): Function<any>;
		lovePengyou(): Function<any>;
		walkPengyou(): Function<any>;
		depressPengyou(): Function<any>;
		faintPengyou(): Function<any>;
		fishPengyou(): Function<any>;
		icePengyou(): Function<any>;
	}
}

export {};
