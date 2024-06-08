<script lang="ts">
	import { ITransactionType } from '$lib/utils';

	let displayType: ITransactionType = ITransactionType.INCOME;
</script>

<div class="flex justify-evenly rounded-3xl border glassEffect p-2">
	<input
		bind:group={displayType}
		id="displayIncome"
		type="radio"
		name="displayType"
		value={ITransactionType.INCOME}
		class="peer/income appearance-none"
		hidden
	/>
	<label
		for="displayIncome"
		class="text-primary peer-checked/income:text-white peer-checked/income:bg-primary rounded-3xl p-2 cursor-pointer"
	>
		INCOME
	</label>

	<input
		bind:group={displayType}
		id="displayExpenses"
		type="radio"
		name="displayType"
		value={ITransactionType.EXPENSE}
		class="peer/expenses appearance-none"
		hidden
	/>
	<label
		for="displayExpenses"
		class="text-primary peer-checked/expenses:text-white peer-checked/expenses:bg-primary rounded-3xl p-2 cursor-pointer"
	>
		EXPENSES
	</label>
</div>
