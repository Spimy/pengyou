<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Modal from '$lib/components/Modal.svelte';
	import type { SubmitFunction } from './$types.js';

	export let data;
	export let form;

	const customEnhance: SubmitFunction = () => {
		return async ({ update }) => {
			window.location.replace(`${$page.url.pathname}#msg`);
			return update({ reset: true });
		};
	};
</script>

<Modal id="msg" title="Acknowledgement">
	{#if form}
		<p class="text-white">
			{form.message}
		</p>
	{/if}
</Modal>

<form
	class="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-300 to-white-300 px-1.5"
	method="POST"
	use:enhance={customEnhance}
>
	<div class="mt-20 md:mt-0 min-w-full flex flex-col rounded-xl bg-brack p-10 text-slate-200">
		<h1 class="text-center font-bold text-4xl">PengYou Store</h1>
		<img
			class="w-32 h-32 mx-auto mt-4 mb-6 object-contain"
			src="store-penguin.png"
			alt="PengYou"
			title="Mr.PengYou"
		/>
		<h1 class="text-center font-bold text-2xl">Food</h1>
		<div class="flex flex-row flex-wrap">
			{#each data.storeItems.foods as food}
				<button
					type="submit"
					formaction="?/store&item={food.id}&type=foods"
					disabled={food.cost === 0}
					class="flex grow m-2 h-[10rem] w-[8rem] flex-col justify-evenly bg-black rounded-3xl"
				>
					<h2 class="text-center px-4">{food.name}</h2>
					<img src={food.img} class="w-[80px] mx-auto" alt="" />
					<p class="text-xs text-center px-4">{food.cost} PenguCoins</p>
				</button>
			{/each}
		</div>

		<h1 class="text-center font-bold text-2xl mt-4">Backgrounds</h1>
		<div class="flex flex-row flex-wrap">
			{#each data.storeItems.backgrounds as background}
				<button
					formaction="?/store&item={background.id}&type=backgrounds"
					disabled={background.cost === 0}
					class="flex grow m-2 h-[10rem] w-[8rem] flex-col justify-evenly bg-black rounded-3xl"
				>
					<h2 class="text-center px-4">{background.name}</h2>
					<img src={background.img} class="w-[80px] mx-auto" alt="" />
					<p class="text-xs text-center px-4">{background.cost} PenguCoins</p>
				</button>
			{/each}
		</div>

		<div>
			<div class="w-full">
				<form>
					<div class="mb-6">
						<div>
							<br />
							<div class="flex items-center justify-between text-center">
								<button
									class="shadow-[-8px_8px_0px_-1px_rgba(0,0,0,1)] shadow-blue-700 hover:border-blue-500 transition ease-in-out delay-70 bg-primary hover:translate-y-1px active:translate-y-8 hover:scale-110 hover:bg-sky-500 duration-300 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full"
									type="submit"
								>
									Done
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</form>
