<script>
	import { enhance } from '$app/forms';
	import { storeItems } from '$lib/utils';
</script>

<form
	class="py-10 flex min-h-screen w-screen items-center justify-center bg-gradient-to-b from-sky-300 to-white-300 px-1.5"
	method="POST"
	use:enhance
>
	<div class="flex max-w-screen flex-col rounded-xl bg-brack py-12 px-3 text-slate-200">
		<h1 class="text-center font-bold text-4xl">PengYou Store</h1>
		<img class="w-28 h-28 mx-auto my-5" src="casual-penguin.png" alt="PengYou" title="Mr.PengYou" />
		<h1 class="text-center font-bold text-2xl">Food</h1>
		<div class="flex flex-row flex-wrap">
			{#each storeItems.foods as food}
				<button
					type="submit"
					formaction="?/store&item={food.id}&type=foods"
					disabled={food.cost === 0}
					class="flex grow m-2 h-[10rem] w-[8rem] flex-col justify-evenly bg-black rounded-3xl"
				>
					<h2 class="text-center">{food.name}</h2>
					<p class="text-xs text-center">{food.cost} PenguCoins</p>
				</button>
			{/each}
		</div>
		<!-- <h1 class="text-center font-bold text-2xl">Items</h1>
		<div class="flex flex-row flex-wrap">
			{#each storeItems.items as item}
				<button
					formaction="?/store&item={item.id}&type=items"
					disabled={item.cost === 0}
					class="flex grow m-2 h-[10rem] w-[8rem] flex-col justify-evenly bg-black rounded-3xl"
				>
					<h2 class="text-center">{item.name}</h2>
					<p class="text-xs text-center">{item.cost} PenguCoins</p>
				</button>
			{/each}
		</div> -->
		<h1 class="text-center font-bold text-2xl">Backgrounds</h1>
		<div class="flex flex-row flex-wrap">
			{#each storeItems.backgrounds as background}
				<button
					formaction="?/store&item={background.id}&type=backgrounds"
					disabled={background.cost === 0}
					class="flex grow m-2 h-[10rem] w-[8rem] flex-col justify-evenly bg-black rounded-3xl"
				>
					<h2 class="text-center">{background.name}</h2>
					<p class="text-xs text-center">{background.cost} PenguCoins</p>
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
									Wear
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</form>
