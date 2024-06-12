<script lang="ts">
	import type { ApexOptions } from 'apexcharts';
	import { onMount } from 'svelte';

	export let options: ApexOptions;
	let loaded = false;

	const chart = (node: HTMLElement, options: ApexOptions) => {
		if (!loaded) return;

		let myChart = new window.ApexCharts(node, options);
		myChart.render();

		return {
			update(options: ApexOptions) {
				myChart.updateOptions(options);
			},
			destroy() {
				myChart.destroy();
			}
		};
	};

	onMount(async () => {
		const module = await import('apexcharts');
		window.ApexCharts = module.default;
		loaded = true;
	});
</script>

{#if loaded}
	<div use:chart={options}></div>
{/if}
