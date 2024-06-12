<script lang="ts">
	export let skinSrc = '/sprites/penguin-default.png';
	export let bgSrc = '/background/background-default.png';
</script>

<svelte:head>
	<script lang="ts">
		// please don't change these code idk man
		function sadPengyou() {
			document.getElementById('pengyou')!.classList.remove('pengyou-walk');
			document.getElementById('pengyou')!.classList.remove('pengyou-angry');
			document.getElementById('pengyou')!.classList.remove('pengyou-love');
			document.getElementById('pengyou')!.classList.remove('pengyou-depress');
			document.getElementById('pengyou')!.classList.remove('pengyou-faint');
			document.getElementById('pengyou')!.classList.add('pengyou-sad');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-fish');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-ice');
		}
		function angryPengyou() {
			document.getElementById('pengyou')!.classList.remove('pengyou-walk');
			document.getElementById('pengyou')!.classList.add('pengyou-angry');
			document.getElementById('pengyou')!.classList.remove('pengyou-love');
			document.getElementById('pengyou')!.classList.remove('pengyou-depress');
			document.getElementById('pengyou')!.classList.remove('pengyou-faint');
			document.getElementById('pengyou')!.classList.remove('pengyou-sad');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-fish');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-ice');
		}
		function lovePengyou() {
			document.getElementById('pengyou')!.classList.remove('pengyou-walk');
			document.getElementById('pengyou')!.classList.remove('pengyou-angry');
			document.getElementById('pengyou')!.classList.add('pengyou-love');
			document.getElementById('pengyou')!.classList.remove('pengyou-depress');
			document.getElementById('pengyou')!.classList.remove('pengyou-faint');
			document.getElementById('pengyou')!.classList.remove('pengyou-sad');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-fish');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-ice');
		}
		function walkPengyou() {
			document.getElementById('pengyou')!.classList.add('pengyou-walk');
			document.getElementById('pengyou')!.classList.remove('pengyou-angry');
			document.getElementById('pengyou')!.classList.remove('pengyou-love');
			document.getElementById('pengyou')!.classList.remove('pengyou-depress');
			document.getElementById('pengyou')!.classList.remove('pengyou-faint');
			document.getElementById('pengyou')!.classList.remove('pengyou-sad');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-fish');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-ice');
		}

		function depressPengyou() {
			document.getElementById('pengyou')!.classList.remove('pengyou-walk');
			document.getElementById('pengyou')!.classList.remove('pengyou-angry');
			document.getElementById('pengyou')!.classList.remove('pengyou-love');
			document.getElementById('pengyou')!.classList.add('pengyou-depress');
			document.getElementById('pengyou')!.classList.remove('pengyou-faint');
			document.getElementById('pengyou')!.classList.remove('pengyou-sad');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-fish');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-ice');
		}

		function faintPengyou() {
			document.getElementById('pengyou')!.classList.remove('pengyou-walk');
			document.getElementById('pengyou')!.classList.remove('pengyou-angry');
			document.getElementById('pengyou')!.classList.remove('pengyou-love');
			document.getElementById('pengyou')!.classList.remove('pengyou-depress');
			document.getElementById('pengyou')!.classList.add('pengyou-faint');
			document.getElementById('pengyou')!.classList.remove('pengyou-sad');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-fish');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-ice');
		}

		function fishPengyou() {
			document.getElementById('pengyou')!.classList.remove('pengyou-walk');
			document.getElementById('pengyou')!.classList.remove('pengyou-angry');
			document.getElementById('pengyou')!.classList.remove('pengyou-love');
			document.getElementById('pengyou')!.classList.remove('pengyou-depress');
			document.getElementById('pengyou')!.classList.remove('pengyou-faint');
			document.getElementById('pengyou')!.classList.remove('pengyou-sad');
			document.getElementById('pengyou')!.classList.add('pengyou-eat-fish');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-ice');
		}

		function icePengyou() {
			document.getElementById('pengyou')!.classList.remove('pengyou-walk');
			document.getElementById('pengyou')!.classList.remove('pengyou-angry');
			document.getElementById('pengyou')!.classList.remove('pengyou-love');
			document.getElementById('pengyou')!.classList.remove('pengyou-depress');
			document.getElementById('pengyou')!.classList.remove('pengyou-faint');
			document.getElementById('pengyou')!.classList.remove('pengyou-sad');
			document.getElementById('pengyou')!.classList.remove('pengyou-eat-fish');
			document.getElementById('pengyou')!.classList.add('pengyou-eat-ice');
		}
	</script>
</svelte:head>

<section class="relative overflow-hidden">
	<div class="background w-full h-[90dvh]" style="background:url({bgSrc});" />
	<div
		class="pengyou-sad pengyou-angry pengyou-love pengyou-depress pengyou-faint pengyou-eat-fish pengyou-eat-ice pengyou-spoon pengyou-walk"
		id="pengyou"
		style="background:url({skinSrc})"
	></div>
</section>

<style>
	.background {
		background-repeat: repeat-x !important;
		background-size: contain !important;
		background-position: bottom !important;
	}

	#pengyou {
		--_size: 500px;
		--_x-pos: calc(var(--_size) - 100px);
		position: absolute;
		bottom: 0;
		width: calc(var(--_size) - 300px);
		height: calc(var(--_size) - 300px);
		background-size: calc(var(--_size) * 2.2) !important;
	}

	.pengyou-spoon {
		background: url(/sprites/penguin-spoon.png);
	}

	.pengyou-sad {
		background-color: red;
		animation: sad 1s infinite;
	}

	.pengyou-angry {
		animation: angry 1s infinite;
	}

	.pengyou-love {
		animation: love 1s infinite;
	}

	.pengyou-faint {
		animation: faint 1s infinite;
	}

	.pengyou-depress {
		animation: depress 1s infinite;
	}

	.pengyou-eat-fish {
		animation: eat-fish 1.5s infinite;
	}

	.pengyou-eat-ice {
		animation: eat-ice 1.5s infinite;
	}

	.pengyou-walk {
		animation:
			walkFrames 1s infinite,
			walk 12s infinite;
	}

	@keyframes sad {
		0% {
			background-position: calc(var(--_size) - var(--_x-pos) * -1) 900px;
		}
		49% {
			background-position: calc(var(--_size) - var(--_x-pos) * -1) 900px;
		}
		50% {
			background-position: 0px 900px;
		}
		100% {
			background-position: 0px 900px;
		}
	}

	@keyframes angry {
		0% {
			background-position: calc(var(--_size) - var(--_x-pos) * -1) 1110px;
		}
		49% {
			background-position: calc(var(--_size) - var(--_x-pos) * -1) 1110px;
		}
		50% {
			background-position: 0px 1110px;
		}
		100% {
			background-position: 0px 1110px;
		}
	}

	@keyframes love {
		0% {
			background-position: calc(var(--_size) - var(--_x-pos) * -1) 0px;
		}
		49% {
			background-position: calc(var(--_size) - var(--_x-pos) * -1) 0px;
		}
		50% {
			background-position: 0px 230px;
		}
		100% {
			background-position: 0px 230px;
		}
	}

	@keyframes walkFrames {
		0% {
			background-position: calc(var(--_size) - 400px * -1) 225px;
		}
		49% {
			background-position: calc(var(--_size) - 400px * -1) 225px;
		}
		50% {
			background-position: 0px 225px;
		}
		100% {
			background-position: 0px 225px;
		}
	}

	@keyframes walk {
		0% {
			transform: scaleX(1);
			left: 0%;
		}
		10% {
			transform: scaleX(1);
			left: 40%;
		}
		20% {
			transform: scaleX(1);
			left: 60%;
		}
		21% {
			transform: scaleX(-1);
			left: 60%;
		}
		30% {
			transform: scaleX(-1);
			left: 40%;
		}
		40% {
			transform: scaleX(-1);
			left: 0%;
		}
		50% {
			transform: scaleX(-1);
			left: 0%;
		}
		60% {
			transform: scaleX(-1);
			left: -20%;
		}
		61% {
			transform: scaleX(1);
			left: -20%;
		}
		70% {
			transform: scaleX(1);
			left: -15%;
		}
		80% {
			transform: scaleX(1);
			left: 15%;
		}
		81% {
			transform: scaleX(-1);
			left: 15%;
		}
		90% {
			transform: scaleX(-1);
			left: 10%;
		}
		99% {
			transform: scaleX(-1);
			left: 0%;
		}
		100% {
			transform: scaleX(1);
			left: 0%;
		}
	}

	@keyframes walkPos {
		0% {
			left: -40%;
		}
		20% {
			left: 0%;
		}
		40% {
			left: 20%;
		}
		60% {
			left: 40%;
		}
		80% {
			left: 60%;
		}
		100% {
			left: 100%;
		}
	}

	@keyframes depress {
		0% {
			background-position: calc(var(--_size) - var(--_x-pos) * -1) 670px;
		}
		49% {
			background-position: calc(var(--_size) - var(--_x-pos) * -1) 670px;
		}
		50% {
			background-position: 15px 670px;
		}
		100% {
			background-position: 15px 670px;
		}
	}

	@keyframes faint {
		0% {
			height: 175px;
			background-position: calc(var(--_size) - var(--_x-pos) * -1) 430px;
		}
		49% {
			height: 175px;
			background-position: calc(var(--_size) - var(--_x-pos) * -1) 430px;
		}
		50% {
			height: 175px;
			background-position: calc(var(--_size) - var(--_x-pos) + 300px * -1) 430px;
		}
		100% {
			height: 175px;
			background-position: calc(var(--_size) - var(--_x-pos) + 300px * -1) 430px;
		}
	}
	@keyframes eat-fish {
		0% {
			background-position: 1300px 1100px;
		}
		49% {
			background-position: 1300px 1100px;
		}
		50% {
			background-position: 1520px 1100px;
		}
		100% {
			background-position: 1520px 1100px;
		}
	}
	@keyframes eat-ice {
		0% {
			background-position: 1300px 880px;
		}
		49% {
			background-position: 1300px 880px;
		}
		50% {
			background-position: 1520px 880px;
		}
		100% {
			background-position: 1520px 880px;
		}
	}
</style>
