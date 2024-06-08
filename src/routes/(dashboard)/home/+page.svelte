<script lang="ts">
	import { enhance } from '$app/forms';
	import Modal from '$lib/components/Modal.svelte';
	import PengYou from '$lib/components/PengYou.svelte';
	import TypeOfExpenses from '$lib/components/TypeOfExpenses.svelte';
	import type { SubmitFunction } from './$types.js';

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
		<p class="mt-2">{data.tip}</p>
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
<a class="absolute top-[65vh] p-5 bg-red-500 rounded-xl" href="#inventory">Open Inventory</a>

<Modal id="transaction" title="Add Transaction">
	<form class="grid gap-2" action="/transactions/?/addTransaction" method="POST" use:enhance>
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
<a class="inline-block p-5 bg-red-500 rounded-xl" href="#transaction">Add Transaction</a>

<div class="bg-brack p-4 pb-28 rounded-t-3xl space-y-2 min-h-[60vh]">test</div>

<form action="/?/logout" method="POST" use:enhance>
	<button class="" type="submit">Logout</button>
</form>
