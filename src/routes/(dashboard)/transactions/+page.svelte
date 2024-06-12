<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Chart from '$lib/components/Chart.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import TypeOfExpenses from '$lib/components/TypeOfExpenses.svelte';
	import { ITransactionType } from '$lib/utils';

	export let data;
</script>

<div class="pt-16 md:pt-0 bg-primary overflow-none">
	<header class="p-4">
		<div class="flex flex-row mb-2">
			<h1 class="text-2xl font-bold flex-1 my-auto">Transactions</h1>

			<Modal id="transaction" title="Add Transaction">
				<form
					class="mb-8 flex flex-wrap flex-col"
					method="POST"
					action="/transactions/?/ocr&redirect={$page.url.pathname}"
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
					<button class="bg-red-500 font-bold py-2 px-4 rounded-full text-white mt-4" type="submit">
						Scan
					</button>
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

					<button class="bg-sky-300 font-bold py-2 px-4 rounded-full text-white mt-4" type="submit">
						Add
					</button>
				</form>
			</Modal>
			<a
				class="p-2 px-4 bg-red-500 rounded-xl shadow-[-5px_5px_0px_-1px_rgba(201,32,29,100%)]"
				href="#transaction"
			>
				+
			</a>
		</div>

		<div class="glassEffect p-5 rounded-2xl">
			<Chart
				options={{
					chart: { type: 'line' },
					colors: ['#00FFFF'],
					series: [
						{
							data: data.transactions.toReversed().map((t, index) => ({
								x: t.title,
								// I do not remember how this works lol
								y: data.transactions
									.toReversed()
									.reduce(
										(acc, cur, i) =>
											i > index
												? acc
												: acc +
													(cur.transactionType === ITransactionType.EXPENSE
														? -cur.amount
														: cur.amount),
										index > 0 ? index - 1 : 0
									)
							}))
						}
					],
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
								text: 'Balance',
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
							show: false
						}
					}
				}}
			/>
		</div>
	</header>

	<main>
		<h2 class="text-2xl mb-2 font-bold px-4">History</h2>

		<div class="bg-brack p-4 pb-28 rounded-t-3xl space-y-2 min-h-[60vh]">
			{#if data.transactions.length > 0}
				{#each data.transactions as transaction}
					<div class="bg-bracker rounded-3xl p-4">
						<h3
							class:text-red-600={transaction.transactionType === ITransactionType.EXPENSE}
							class:text-green-500={transaction.transactionType === ITransactionType.INCOME}
							class="text-base font-bold"
						>
							{transaction.category ?? 'Credit Transaction'}
						</h3>
						<h4 class="text-white text-xl font-bold">{transaction.title}</h4>
						<p class="text-white text-sm font-bold">{transaction.created_at?.toDateString()}</p>
						<p class="text-white text-sm font-bold">{transaction.created_at?.toTimeString()}</p>
						<div class="flex justify-end mt-4">
							<p class=" text-white text-xl font-bold">{data.user.currency} {transaction.amount}</p>
						</div>
					</div>
				{/each}
			{:else}
				<p class="text-white">No transactions found! Add one!</p>
			{/if}
		</div>
	</main>
</div>
