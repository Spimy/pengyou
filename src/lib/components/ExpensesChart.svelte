<script lang="ts">
	import { ITransactionType } from '$lib/utils';
	import { onMount } from 'svelte';

	export let transactions: {
		_id: string;
		title: string;
		amount: number;
		transactionType: ITransactionType;
		category?: string | undefined;
		userId: string;
		created_at?: Date | undefined;
	}[];

	const options = {
		chart: {
			type: 'line'
		},
		colors: ['#00FFFF'],
		plotOptions: {
			bar: {
				horizontal: true
			}
		},
		series: [
			{
				data: transactions.map((t, index) => ({
					x: t.title,
					y: transactions.reduce(
						(acc, cur, i) =>
							i > index
								? acc
								: acc +
									(cur.transactionType === ITransactionType.EXPENSE ? -cur.amount : cur.amount),
						index > 0 ? index - 1 : 0
					)
				}))
			}
		],
		yaxis: [
			{
				axisTicks: {
					show: true
				},
				axisBorder: {
					show: true,
					color: '#FFFFFF'
				},
				labels: {
					style: {
						colors: '#FFFFFF'
					}
				},
				title: {
					text: 'Balance',
					style: {
						color: '#FFFFFF'
					}
				}
			}
		],
		xaxis: {
			axisTicks: {
				show: true
			},
			axisBorder: {
				show: true,
				color: '#FFFFFF'
			},
			labels: {
				style: {
					colors: '#FFFFFF'
				}
			}
		}
	};

	const chart = (node: HTMLElement, options: any) => {
		// @ts-ignore
		let myChart = new ApexCharts(node, options);
		myChart.render();

		// return {
		//   update(options) {
		//     myChart.updateOptions(options);
		//   },
		//   destroy() {
		//     myChart.destroy();
		//   },
		// };
	};

	onMount(async () => {
		// @ts-ignore
		var chart = new ApexCharts(document.querySelector('#chart'), options);
		chart.render();
	});
</script>

<svelte:head><script src="https://cdn.jsdelivr.net/npm/apexcharts"></script></svelte:head>

<div class="glassEffect p-5 rounded-2xl">
	<div use:chart={options}></div>
</div>

<style>
</style>
