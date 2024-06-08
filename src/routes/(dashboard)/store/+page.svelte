<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
</script>

<form method="POST" use:enhance>
	<section>
		<h1>Food</h1>
		{#each data.storeItems.foods as food}
			<button
				class="bg-blue-500 p-5 mr-5 rounded"
				formaction="?/store&item={food.id}&type=foods"
				disabled={food.cost === 0}
			>
				{food.name} - {food.cost} PenguCoins
			</button>
		{/each}
	</section>
	<section>
		<h1>Items</h1>
		{#each data.storeItems.items as item}
			<button
				class="bg-blue-500 p-5 mr-5 rounded"
				formaction="?/store&item={item.id}&type=items"
				disabled={item.cost === 0}
			>
				{item.name} - {item.cost} PenguCoins
			</button>
		{/each}
	</section>
	<section>
		<h1>Backgrounds</h1>
		{#each data.storeItems.backgrounds as background}
			<button
				class="bg-blue-500 p-5 mr-5 rounded"
				formaction="?/store&item={background.id}&type=backgrounds"
				disabled={background.cost === 0}
			>
				{background.name} - {background.cost} PenguCoins
			</button>
		{/each}
	</section>
</form>
