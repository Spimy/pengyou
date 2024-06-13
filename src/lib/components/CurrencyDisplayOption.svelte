<script lang="ts"> 
	let displayCurrency: String = 'MYR';
</script>

<div class="flex justify-between rounded-3xl border glassEffect p-2">
	<input
		bind:group={displayCurrency}
		id="displayMYR"
		type="radio"
		name="displayCurrency"
		value="MYR"
		class="peer/myr appearance-none"
	/>
	<label
		for="displayMYR"
		class="text-primary peer-checked/myr:text-white peer-checked/myr:bg-primary rounded-3xl p-2 cursor-pointer"
	>
		MYR
	</label>

	<input
		bind:group={displayCurrency}
		id="displaySGD"
		type="radio"
		name="displayCurrency"
		value="SGD"
		class="peer/sgd appearance-none"
	/>
	<label
		for="displaySGD"
		class="text-primary peer-checked/sgd:text-white peer-checked/sgd:bg-primary rounded-3xl p-2 cursor-pointer"
	>
		SGD
	</label>

	<input
		bind:group={displayCurrency}
		id="displayUSD"
		type="radio"
		name="displayCurrency"
		value="USD"
		class="peer/usd appearance-none"
	/>
	<label
		for="displayUSD"
		class="text-primary peer-checked/usd:text-white peer-checked/usd:bg-primary rounded-3xl p-2 cursor-pointer"
	>
		USD
	</label>

	<input
		bind:group={displayCurrency}
		id="displayEUR"
		type="radio"
		name="displayCurrency"
		value="EUR"
		class="peer/eur appearance-none"
	/>
	<label
		for="displayEUR"
		class="text-primary peer-checked/eur:text-white peer-checked/eur:bg-primary rounded-3xl p-2 cursor-pointer"
	>
		EUR
	</label>

	<input
		bind:group={displayCurrency}
		id="displayGBP"
		type="radio"
		name="displayCurrency"
		value="GBP"
		class="peer/gbp appearance-none"
	/>
	<label
		for="displayGBP"
		class="text-primary peer-checked/gbp:text-white peer-checked/gbp:bg-primary rounded-3xl p-2 cursor-pointer"
	>
		GBP
	</label>
</div>
