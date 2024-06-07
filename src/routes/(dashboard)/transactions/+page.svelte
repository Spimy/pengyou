<script lang="ts">
	import { enhance } from '$app/forms';
	import { ITransactionType } from '$lib/utils';

	export let data;
</script>

<!-- ! Temporary for the sake of testing, move add transaction form to a modal component -->
<form action="?/addTransaction" method="POST" use:enhance>
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
</form>

<h1>Transactions List</h1>
<table>
	<tr>
		<th>Transaction</th>
		<th>Category</th>
		<th>Amount</th>
		<th>Date</th>
	</tr>
	{#each data.transactions as transaction}
		<tr>
			<td>{transaction.title}</td>
			<td>{transaction.category ?? 'Credit Transaction'}</td>
			<td>
				{transaction.transactionType === ITransactionType.EXPENSE ? '-' : '+'}{data.user.currency}
				{transaction.amount}
			</td>
			<td
				>{transaction.created_at?.toLocaleDateString()} {transaction.created_at?.toTimeString()}</td
			>
		</tr>
	{/each}
</table>
