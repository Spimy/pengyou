<script lang="ts">
	import { enhance } from '$app/forms';
	import ExpensesChartcopy from '$lib/components/TransactionChart.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import PengYou from '$lib/components/PengYou.svelte';
	import TypeOfExpenses from '$lib/components/TypeOfExpenses.svelte';
	import type { SubmitFunction } from './$types.js';
	import TransactionChart from '$lib/components/TransactionChart.svelte';

	export let data;

	const customEnhance: SubmitFunction = () => {
		return async ({ action }) => {
			const itemId = action.searchParams.get('item');

			if (itemId === 'fish') {
				// @ts-ignore
				window.fishPengyou();

				setTimeout(() => {
					// @ts-ignore
					window.lovePengyou();
					setTimeout(() => {
						// @ts-ignore
						window.walkPengyou();
					}, 3000);
				}, 3000);
			}

			if (itemId === 'ice-cream') {
				// @ts-ignore
				window.icePengyou();

				setTimeout(() => {
					// @ts-ignore
					window.lovePengyou();
					setTimeout(() => {
						// @ts-ignore
						window.walkPengyou();
					}, 3000);
				}, 3000);
			}
		};
	};
</script>

<div class="relative">
	<PengYou />

	<div
		class="absolute top-20 left-2/4 w-80 -translate-x-2/4 bg-white p-5 rounded-3xl shadow-[-8px_8px_0px_-1px_rgba(5,76,214,25%)]"
	>
		<h1 class="font-black text-2xl">Pengyou's thoughts:</h1>
		{#if data.tip}
		<p class="mt-2">{data.tip}</p>
		{:else}
		<p class="mt-2">Pengyou is very excited to get to know you!</p>
		{/if}

	</div>

</div>

<Modal id="inventory" title="Inventory">
	<form method="POST" use:enhance={customEnhance}>
		<section>
			<h1>Food</h1>
			{#each data.inventory.foods as food}
				<button
					class="bg-blue-500 p-5 mr-5 rounded"
					formaction="?/inventory&item={food.id}&type=foods"
				>
					{food.name} x{food.amount}
				</button>
			{/each}
		</section>
		<section>
			<h1>Items</h1>
			{#each data.inventory.items as item}
				<button
					class="bg-blue-500 p-5 mr-5 rounded"
					formaction="?/inventory&item={item.id}&type=items"
				>
					{item.name} x{item.amount}
				</button>
			{/each}
		</section>
		<section>
			<h1>Backgrounds</h1>
			{#each data.inventory.backgrounds as background}
				<button
					class="bg-blue-500 p-5 mr-5 rounded"
					formaction="?/inventory&item={background.id}&type=backgrounds"
				>
					{background.name} x{background.amount}
				</button>
			{/each}
		</section>
	</form>
</Modal>
<a class="absolute top-[65vh] left-[5vw] p-5 bg-yellow-200 rounded-xl shadow-[-5px_5px_0px_-1px_rgba(255,222,0,100%)]" href="#inventory"
	>Open Inventory</a
>

<Modal id="transaction" title="Add Transaction">
	<form class="mb-8 flex flex-wrap flex-col"  method="POST" action="?/ocr" enctype="multipart/form-data" use:enhance>
		<h1 class="text-white mx-auto text-2xl">AUTOMATIC</h1>
		<label for="receipt">Custom Upload<svg
			xmlns="http://www.w3.org/2000/svg"
			class="text-red-500 mx-auto"
			width="100"
			height="100"
			viewBox="0 0 32 32"
			stroke-width="1.5"
			stroke="var(--clr-primary-100)"
			fill="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
		<path d="M30.9599 22.86H29.4299V27.43H30.9599V22.86Z"  />
		<path d="M30.9599 1.51999H29.4299V6.09999H30.9599V1.51999Z"  />
		<path d="M29.4301 0H24.8601V1.52H29.4301V0Z"  />
		<path d="M29.4301 27.43H24.8601V28.95H29.4301V27.43Z"  />
		<path d="M23.48 12.475H9.47998V14.475H23.48V12.475Z"  />
		<path d="M23.48 7.47501H9.47998V9.47501H23.48V7.47501Z"  />
		<path d="M23 17H16V19H23V17Z"  />
		<path d="M8.10003 27.43H3.53003V28.95H8.10003V27.43Z"  />
		<path d="M8.10003 0H3.53003V1.52H8.10003V0Z"  />
		<path d="M3.53 22.86H2V27.43H3.53V22.86Z"  />
		<path d="M3.53 1.51999H2V6.09999H3.53V1.51999Z"  />
		</svg></label>
		<input type="file" name="receipt" id="receipt" class="invisible w-1"/>
		<button class="bg-red-500 font-bold py-2 px-4 rounded-full text-white mt-4" type="submit"
		>Scan</button
	>
	</form>

	<form class="grid gap-2" action="/transactions/?/addTransaction" method="POST" use:enhance>
		<h1 class="text-white mx-auto text-2xl">MANUAL</h1>
		<div>
			<label class="text-lg font-bold text-white mb-2" for="type">Type</label>
			<TypeOfExpenses />
		</div>

		<div class="grid">
			<label class="text-lg font-bold text-white mb-2" for="title">Description</label>
			<input
				class="rounded-full bg-brack text-white py-2 px-4"
				type="text"
				name="title"
				id="title"
			/>
		</div>

		<div class="grid">
			<label class="text-lg font-bold text-white mb-2" for="amount">Amount</label>
			<input
				class="rounded-full bg-brack text-white py-2 px-4"
				type="text"
				name="amount"
				id="amount"
			/>
		</div>

		<button class="bg-sky-300 font-bold py-2 px-4 rounded-full text-white mt-4" type="submit"
			>Add</button
		>
	</form>
	
</Modal>
<a class="absolute top-[65vh] left-[50vw] p-5 bg-red-500 rounded-xl shadow-[-5px_5px_0px_-1px_rgba(201,32,29,100%)]" href="#transaction"> Add Transaction </a>

<div class="bg-brack p-4 pb-28 rounded-t-3xl space-y-2 min-h-[60vh]">
	<h1 class="text-primary text-2xl">Dashboard</h1>
	<div>
		<div class="glassEffect">Budget this month</div> 
		<TransactionChart transactions={data.transactions}></TransactionChart>
		<h1 class="text-primary text-2xl">Missions</h1>
</div></div>

<form action="/?/logout" method="POST" use:enhance>
	<button class="" type="submit">Logout</button>
</form>
