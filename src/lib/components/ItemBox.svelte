<script lang="ts">
	let elements = [
		{ title: 'Default', description: 'Description 1' },
		{ title: 'Title 2', description: 'Description 2' },
		{ title: 'Title 3', description: 'Description 3' },
		{ title: 'Title 4', description: 'Description 4' },
		{ title: 'Title 5', description: 'Description 5' },
		{ title: 'Title 6', description: 'Description 6' }
	];
</script>

<div class="flex flex-row flex-wrap">
	{#each elements as element}
		<div class="flex grow m-2 h-[10rem] w-[8rem] flex-col justify-evenly bg-black rounded-3xl">
			<h2 class="text-center">{element.title}</h2>
			<p class="text-xs text-center">{element.description}</p>
		</div>
	{/each}
</div>
