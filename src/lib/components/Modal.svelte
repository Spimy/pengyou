<script lang="ts">
	export let id: string;
	export let title: string;
</script>

<div
	{id}
	class="fixed inset-0 bg-black/50 transition-opacity duration-200 invisible opacity-0 target:visible target:opacity-100"
>
	<div
		class="rounded-3xl mx-auto mt-20 p-8 inset-0 bg-bracker border-gray-500 border-solid border-2 w-fit shadow-black/50 relative"
	>
		<h2 class="mt-0 mb-4 text-gray-500">{title}</h2>
		<a
			class="absolute w-5 h-5 top-8 right-6 opacity-80 transition-all duration-200 text-base font-bold no-underline text-gray-500 hover:opacity-100"
			href="##">&times;</a
		>
		<div class="max-h-fit overflow-auto">
			<slot />
		</div>
	</div>
</div>
