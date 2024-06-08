<script>
	import { enhance } from '$app/forms';
	import Modal from '$lib/components/Modal.svelte';

	export let data;
</script>

<img src="/background/background-default.png" class="w-full" alt="" />
<h1>Authenticated as {data.user.username}</h1>
<p class="">Tip from Pengyou: <b>{data.tip}</b></p>

<Modal id="inventory" title="Inventory">
	<form method="POST" use:enhance>
		<section>
			<h1>Food</h1>
			{#each data.inventory.foods as food}
				<button
					class="bg-blue-500 p-5 mr-5 rounded"
					formaction="?/inventory&item={food.id}&type=foods"
				>
					{food.name} x{food.amount}
				</button>
			{/each}
		</section>
		<section>
			<h1>Items</h1>
			{#each data.inventory.items as item}
				<button
					class="bg-blue-500 p-5 mr-5 rounded"
					formaction="?/inventory&item={item.id}&type=items"
				>
					{item.name} x{item.amount}
				</button>
			{/each}
		</section>
		<section>
			<h1>Backgrounds</h1>
			{#each data.inventory.backgrounds as background}
				<button
					class="bg-blue-500 p-5 mr-5 rounded"
					formaction="?/inventory&item={background.id}&type=backgrounds"
				>
					{background.name} x{background.amount}
				</button>
			{/each}
		</section>
	</form>
</Modal>
<a class="inline-block p-5 bg-red-500 rounded-xl" href="#inventory">Open Inventory</a>

<form action="/?/logout" method="POST" use:enhance>
	<button class="" type="submit">Logout</button>
</form>
