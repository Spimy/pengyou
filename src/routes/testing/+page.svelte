<script lang="ts">
	import CurrencyDisplayOption from '$lib/components/CurrencyDisplayOption.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar></Navbar>
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
				<form>
					<div class="">
						<div class="">
							<p class="text-xl font-bold mb-4 ml-2">What is your monthly income?</p>
							<input
								class="text-l mb-8 shadow appearance-none border rounded-3xl w-full py-2 px-3 bg-bracker leading-tight focus:outline-none focus:shadow-outline"
								id="income"
								type=""
								name="income"
								placeholder="Monthly Income?"
							/>
						</div>
						<div class="">
							<p class="mb-4 text-xl font-bold ml-2">What are your daily expenses?</p>
							<input
								class="mb-8 shadow appearance-none border rounded-3xl w-full py-2 px-3 bg-bracker leading-tight focus:outline-none focus:shadow-outline"
								id="expenses"
								type=""
								name="expenses"
								placeholder="Daily expenses?"
							/>
						</div>
						<CurrencyDisplayOption></CurrencyDisplayOption>
						<div class="">
							<p class="mb-4 text-xl font-bold ml-2">What's your monthly budget target?</p>
							<input
								class="mb-10 shadow appearance-none border rounded-3xl w-full py-2 px-3 bg-bracker leading-tight focus:outline-none focus:shadow-outline"
								id="expenses"
								type=""
								name="expenses"
								placeholder="Monthly budget target?"
							/>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between text-center">
							<button
								class="shadow-[-8px_8px_0px_-1px_rgba(0,0,0,1)] shadow-blue-700 hover:border-blue-500 transition ease-in-out delay-70 bg-primary hover:translate-y-1px active:translate-y-8 hover:scale-110 hover:bg-sky-500 duration-300 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-4/5 mx-auto"
								type="button">Next</button
							>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<!-- flex justify-between gap-1 border-2 border-sky-500 border-solid transition p-1 rounded-3xl -->
<!-- hs-tab-active:bg-blue-700 hs-tab-active:text-gray-700 py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-sky-500 hover:text-gray-700 hover:bg-sky-500 font-medium rounded-3xl -->
