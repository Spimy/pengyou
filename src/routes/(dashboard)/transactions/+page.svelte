<script lang="ts">
	import ExpensesChart from '$lib/components/ExpensesChart.svelte';
	import { ITransactionType } from '$lib/utils';

	export let data;
</script>

<!-- ! Temporary for the sake of testing, move add transaction form to a modal component -->
<!-- <form action="?/addTransaction" method="POST" use:enhance>
	<label for="title">Title</label>
	<input type="text" name="title" id="title" />

	<label for="amount">Amount</label>
	<input type="text" name="amount" id="amount" />

	<label for="type">Type</label>
	<select name="type" id="type">
		<option value={ITransactionType.EXPENSE}>{ITransactionType.EXPENSE}</option>
		<option value={ITransactionType.INCOME}>{ITransactionType.INCOME}</option>
	</select>

	<button type="submit">Add</button>
</form> -->

<div class="pt-16 bg-primary">
	<header class="p-4">
		<h1 class="text-2xl font-bold">Transactions</h1>
		<ExpensesChart transactions={data.transactions} />
	</header>

	<main>
		<h2 class="text-xl font-bold px-4">History</h2>

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
				<label class="text-white">No transactions found! Add one!</label>
			{/if}
		</div>
	</main>
</div>
