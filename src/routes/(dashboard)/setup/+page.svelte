<script lang="ts">
	import { enhance } from '$app/forms';
	import CurrencyDisplayOption from '$lib/components/CurrencyDisplayOption.svelte';
</script>

<div
	class="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-sky-300 to-white-300 px-4"
>
	<div
		class="flex w-[500px] max-w-3xl flex-col rounded-3xl bg-brack pb-12 pt-6 px-6 text-slate-200"
	>
		<div class="flex flex-row items-center mb-10">
			<img class="w-24 h-24" src="./confused-default.png" alt="" />
			<p class="text-center text-xl"><br />PengYou wants to know your personal information</p>
		</div>
		<div>
			<div class="w-full">
				<form action="?/setupProfile" method="POST" use:enhance>
					<div>
						<div>
							<label for="income" class="inline-block text-base font-bold mt-4 mb-2 ml-2">
								What is your monthly income?
							</label>
							<input
								class="shadow appearance-none border rounded-3xl w-full py-2 px-3 bg-bracker leading-tight focus:outline-none focus:shadow-outline"
								id="income"
								type="text"
								name="income"
								placeholder="Monthly Income?"
							/>
						</div>
						<div>
							<label for="expenses" class="inline-block text-base font-bold mt-4 mb-2 ml-2">
								What are your daily expenses?
							</label>
							<input
								class="shadow appearance-none border rounded-3xl w-full py-2 px-3 bg-bracker leading-tight focus:outline-none focus:shadow-outline"
								id="expenses"
								type="text"
								name="expenses"
								placeholder="Daily expenses?"
							/>
						</div>

						<div>
							<p class="inline-block text-base font-bold mt-4 mb-2 ml-2">
								What is your preferred currency?
							</p>
							<CurrencyDisplayOption></CurrencyDisplayOption>
						</div>

						<div>
							<label for="budget" class="inline-block text-base font-bold mt-4 mb-2 ml-2">
								What's your monthly budget target?
							</label>
							<input
								class="mb-10 shadow appearance-none border rounded-3xl w-full py-2 px-3 bg-bracker leading-tight focus:outline-none focus:shadow-outline"
								id="budget"
								type="text"
								name="budget"
								placeholder="Monthly budget target?"
							/>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between text-center">
							<button
								class="grow shadow-[-8px_8px_0px_-1px_rgba(0,0,0,1)] shadow-blue-700 hover:border-blue-500 transition ease-in-out delay-70 bg-primary hover:translate-y-1px active:translate-y-8 hover:scale-110 hover:bg-sky-500 duration-300 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-4/5 mx-auto"
								type="submit"
							>
								Complete
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
