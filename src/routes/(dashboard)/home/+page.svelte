<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Chart from '$lib/components/Chart.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import PengYou from '$lib/components/PengYou.svelte';
	import TypeOfExpenses from '$lib/components/TypeOfExpenses.svelte';
	import { ITransactionType } from '$lib/utils.js';
	import type { SubmitFunction } from './$types.js';

	export let data;
	export let form;

	const customEnhance: SubmitFunction = () => {
		return async ({ update, action, result }) => {
			const itemId = action.searchParams.get('item');

			if (result.status === 400) {
				window.location.replace(`${$page.url.pathname}#msg`);
			} else {
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
				window.location.replace(`${$page.url.pathname}##`);
			}

			return update({ reset: true });
		};
	};

	const transactions = data.transactions
		.map((t) => ({
			x: t.title,
			y: t.transactionType === ITransactionType.EXPENSE ? -t.amount : 0
		}))
		.reduce(
			(acc, cur, i) => {
				return [
					...acc,
					{
						x: cur.x,
						y: acc[i].y + cur.y
					}
				];
			},
			[{ x: 'Budget', y: data.user.monthlyBudget }]
		);
</script>

<div class="relative">
	<PengYou skinSrc="/sprites/{data.skin}.png" />

	<div
		class="absolute top-20 left-2/4 w-80 md:w-fit -translate-x-2/4 bg-white p-5 rounded-3xl shadow-[-8px_8px_0px_-1px_rgba(5,76,214,25%)]"
	>
		<h1 class="font-black text-2xl">PengYou's thoughts:</h1>
		{#if data.tip}
			<p class="mt-2">{data.tip}</p>
		{:else}
			<p class="mt-2">Pengyou is very excited to get to know you!</p>
		{/if}

		<div class="flex justify-center gap-5 mt-2">
			<a
				class="grow p-5 bg-yellow-200 rounded-xl shadow-[-5px_5px_0px_-1px_rgba(255,222,0,100%)]"
				href="#inventory"
			>
				Open Inventory
			</a>
			<a
				class="grow p-5 bg-red-500 rounded-xl shadow-[-5px_5px_0px_-1px_rgba(201,32,29,100%)]"
				href="#transaction"
			>
				Add Transaction
			</a>
		</div>
	</div>
</div>

<Modal id="msg" title="Acknowledgement">
	{#if form}
		<p class="text-white">
			{form.message}
		</p>
	{/if}
</Modal>

<Modal id="inventory" title="Inventory">
	<form method="POST" use:enhance={customEnhance}>
		<section>
			<h1 class="text-white text-center font-bold text-2xl mt-4">Food</h1>
			<div class="flex flex-row max-w-screen rounded-xl p-10 text-slate-200">
				{#each data.inventory.foods as food}
					<button
						class="flex m-2 h-[10rem] w-[8rem] flex-col bg-brack rounded-3xl"
						formaction="?/inventory&item={food.id}&type=foods"
					>
						<img src={food.img} class="w-[80px] mx-auto mt-5" alt="" />
						<p class="text-xs text-center px-4 mt-5 mx-auto">{food.name} x{food.amount}</p>
					</button>
				{/each}
			</div>
		</section>
		<section>
			<h1 class="text-white text-center font-bold text-2xl mt-4">Food</h1>
			<div class="flex flex-row max-w-screen rounded-xl p-10 text-slate-200">
				{#each data.inventory.items as item}
					<button
						class="flex m-2 h-[10rem] w-[8rem] flex-col bg-brack rounded-3xl"
						formaction="?/inventory&item={item.id}&type=items"
					>
						<img src={item.img} class="w-[80px] mx-auto mt-5" alt="" />
						<p class="text-xs text-center px-4 mt-5 mx-auto">{item.name} x{item.amount}</p>
					</button>
				{/each}
			</div>
		</section>
		<section>
			<h1 class="text-white text-center font-bold text-2xl mt-4">Backgrounds</h1>
			<div class="flex flex-row max-w-screen rounded-xl p-10 text-slate-200">
				{#each data.inventory.backgrounds as background}
					<button
						class="flex m-2 h-[10rem] w-[8rem] flex-col bg-brack rounded-3xl"
						formaction="?/inventory&item={background.id}&type=backgrounds"
					>
						<img src={background.img} class="w-[80px] mx-auto mt-5" alt="" />
						<p class="text-xs text-center px-4 mt-5 mx-auto">
							{background.name} x{background.amount}
						</p>
					</button>
				{/each}
			</div>
		</section>
	</form>
</Modal>

<Modal id="transaction" title="Add Transaction">
	<form
		class="mb-8 flex flex-wrap flex-col"
		method="POST"
		action="/transactions/?/ocr&redirect=/transactions"
		enctype="multipart/form-data"
		use:enhance
	>
		<h1 class="text-white mx-auto text-2xl">AUTOMATIC</h1>
		<label for="receipt" class="flex flex-col"
			><p class="text-red-500 mx-auto mb-2">Custom Upload</p>
			<svg
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
				<path d="M30.9599 22.86H29.4299V27.43H30.9599V22.86Z" />
				<path d="M30.9599 1.51999H29.4299V6.09999H30.9599V1.51999Z" />
				<path d="M29.4301 0H24.8601V1.52H29.4301V0Z" />
				<path d="M29.4301 27.43H24.8601V28.95H29.4301V27.43Z" />
				<path d="M23.48 12.475H9.47998V14.475H23.48V12.475Z" />
				<path d="M23.48 7.47501H9.47998V9.47501H23.48V7.47501Z" />
				<path d="M23 17H16V19H23V17Z" />
				<path d="M8.10003 27.43H3.53003V28.95H8.10003V27.43Z" />
				<path d="M8.10003 0H3.53003V1.52H8.10003V0Z" />
				<path d="M3.53 22.86H2V27.43H3.53V22.86Z" />
				<path d="M3.53 1.51999H2V6.09999H3.53V1.51999Z" />
			</svg></label
		>
		<input
			type="file"
			name="receipt"
			id="receipt"
			class="text-white rounded-3xl bg-red-500 w-[65vw]"
		/>
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

<div class="bg-brack p-4 pb-28 rounded-t-3xl space-y-2 min-h-[60vh]">
	<h1
		class="bg-gradient-to-b bg-clip-text text-transparent from-white to-primary text-2xl font-bold"
	>
		Dashboard
	</h1>
	<div>
		<div class="text-white mx-auto mb-4 w-fit">
			<h2 class="font-bold text-center text-xl">Budget used this month:</h2>

			<p class="text-3xl md:text-5xl font-bold flex items-center justify-center">
				<span class="text-xl">{data.user.currency}&nbsp;</span>
				{(data.user.monthlyBudget - (transactions.at(-1)?.y ?? 0)).toFixed(
					2
				)}/{data.user.monthlyBudget.toFixed(2)}
			</p>

			<div class="flex items-center gap-4 mt-4 w-full">
				<span>0</span>
				<meter
					class="rounded-full w-full bg-gradient-to-r from-white to-white"
					value={(data.user.monthlyBudget - (transactions.at(-1)?.y ?? 0)).toFixed(2)}
					min="0"
					max={data.user.monthlyBudget.toFixed(2)}
					title="Budget used"
				/>
				<span>{data.user.monthlyBudget}</span>
			</div>
		</div>
		<Chart
			options={{
				chart: { type: 'line' },
				colors: ['#00FFFF'],
				series: [{ data: transactions }],
				yaxis: [
					{
						axisTicks: {
							show: true
						},
						axisBorder: {
							show: true,
							color: '#FFFFFF'
						},
						labels: {
							style: {
								colors: '#FFFFFF'
							}
						},
						title: {
							text: 'Budget',
							style: {
								color: '#FFFFFF'
							}
						}
					}
				],
				xaxis: {
					axisTicks: {
						show: true
					},
					axisBorder: {
						show: true,
						color: '#FFFFFF'
					},
					labels: {
						style: {
							colors: '#FFFFFF'
						}
					}
				}
			}}
		/>
	</div>
	<h1 class="text-primary text-2xl">Missions</h1>
	<div class="flex flex-col">
		<div class="flex flex-row py-2">
			{#if data.daily}
				<p class="px-4 text-emerald-400">✓</p>
			{:else}
				<p class="px-4 text-red-400">x</p>
			{/if}
			<p class="px-4 text-white">
				Log in today <span class="text-green-400 text-xs">+20 PenguCoins</span>
			</p>
		</div>

		<div class="flex flex-row py-2">
			{#if data.daily?.addedTransaction}
				<p class="px-4 text-emerald-400">✓</p>
			{:else}
				<p class="px-4 text-red-400">x</p>
			{/if}
			<p class="px-4 text-white">
				Add a transaction <span class="text-green-400 text-xs">+20 PenguCoins</span>
			</p>
		</div>

		<div class="flex flex-row py-2">
			{#if data.daily?.fedPengyou}
				<p class="px-4 text-emerald-400">✓</p>
			{:else}
				<p class="px-4 text-red-400">x</p>
			{/if}
			<p class="px-4 text-white">
				Feed PengYou <span class="text-green-400 text-xs">+20 PenguCoins</span>
			</p>
		</div>

		<div class="flex flex-row py-2">
			{#if data.daily?.readAiTip}
				<p class="px-4 text-emerald-400">✓</p>
			{:else}
				<p class="px-4 text-red-400">x</p>
			{/if}
			<p class="px-4 text-white">
				Read a tip from PengYou <span class="text-green-400 text-xs">+20 PenguCoins</span>
			</p>
		</div>
	</div>
</div>

<style>
	meter::-webkit-meter-optimum-value {
		background: #3ec9ff;
	}
	meter::-moz-meter-bar {
		/* Firefox Pseudo Class */
		background: #3ec9ff;
	}
</style>
