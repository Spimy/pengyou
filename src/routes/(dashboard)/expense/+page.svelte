<script lang="ts">
	import TypeOfExpenses from '$lib/components/TypeOfExpenses.svelte';
</script>

<div
	class="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-sky-300 to-white-300 px-4 backdrop-blur-sm"
>
	<div
		class="flex w-[500px] max-w-3xl flex-col rounded-3xl bg-brack py-12 px-6 text-slate-200 bg-gradient-to-b from-white-00 to-black-300"
	>
		<div class="flex flex-row items-center mb-10"></div>
		<div>
			<div class="w-full">
				<form>
					<div class="">
						<div class="">
							<label for="Date" class="inline-block text-xl font-bold mb-4 ml-2">Date</label>
							<input
								class="glassEffect shadow appearance-none border-none rounded-3xl w-full py-2 px-3 mb-8 leading-tight focus:outline-none focus:outline-sky-500"
								id="date"
								type="date"
								name="date"
							/>
						</div>
						<div class="">
							<label for="transaction" class="inline-block text-xl font-bold mb-4 ml-2"
								>Type of transaction</label
							>
							<TypeOfExpenses></TypeOfExpenses>
						</div>
						<div class="">
							<label for="transaction_category" class="inline-block text-xl font-bold mb-4 ml-2"
								>Transaction Category</label
							>
							<input
								class="glassEffect shadow appearance-none border-none rounded-3xl w-full py-2 px-3 mb-8 leading-tight focus:outline-none focus:outline-sky-500"
								id=""
								type=""
								name=""
							/>
						</div>

						<div class="">
							<label for="transaction_category" class="inline-block text-xl font-bold mb-4 ml-2"
								>Amount</label
							>
							<input
								class="glassEffect shadow appearance-none border-none rounded-3xl w-full py-2 px-3 mb-8 leading-tight focus:outline-none focus:outline-sky-500"
								id=""
								type=""
								name=""
								placeholder="MYR 0.00"
							/>
						</div>

						<div class="">
							<label for="transaction_category" class="inline-block text-xl font-bold mb-4 ml-2"
								>Description</label
							>
							<input
								class="glassEffect shadow appearance-none border-none rounded-3xl w-full py-2 px-3 mb-8 leading-tight focus:outline-none focus:outline-sky-500"
								id="description"
								type="text"
								name="description"
								placeholder="MYR 0.00"
							/>
						</div>

						<div class="flex items-center justify-between text-center">
							<button
								class="shadow-[-8px_8px_0px_-1px_rgba(0,0,0,1)] shadow-blue-700 hover:border-blue-500 transition ease-in-out delay-70 bg-primary hover:translate-y-1px active:translate-y-8 hover:scale-110 hover:bg-sky-500 duration-300 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-4/5 mx-auto"
								type="submit"
							>
								Next
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
