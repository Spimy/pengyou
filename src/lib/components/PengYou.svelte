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
	<div class="background w-full h-[90dvh]" />
	<div
		class="pengyou-sad pengyou-angry pengyou-love pengyou-depress pengyou-faint pengyou-eat-fish pengyou-eat-ice pengyou-spoon pengyou-walk"
		id="pengyou"
	></div>
</section>

<style>
	.background {
		background: url(/background/background-default.png);
		background-repeat: repeat-x;
		background-size: contain;
		background-position: bottom;
	}
	#pengyou {
		--_size: 500px;
		position: absolute;
		bottom: 0;
		width: calc(var(--_size) - 300px);
		height: calc(var(--_size) - 300px);
		background: url(/sprites/penguin-default.png);
		background-size: calc(var(--_size) * 2);
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
			background-position: calc(var(--_size) - 300px * -1) 825px;
		}
		49% {
			background-position: calc(var(--_size) - 300px * -1) 825px;
		}
		50% {
			background-position: 0px 825px;
		}
		100% {
			background-position: 0px 825px;
		}
	}

	@keyframes angry {
		0% {
			background-position: calc(var(--_size) - 300px * -1) 1025px;
		}
		49% {
			background-position: calc(var(--_size) - 300px * -1) 1025px;
		}
		50% {
			background-position: 0px 1025px;
		}
		100% {
			background-position: 0px 1025px;
		}
	}

	@keyframes love {
		0% {
			background-position: calc(var(--_size) - 300px * -1) 0px;
		}
		49% {
			background-position: calc(var(--_size) - 300px * -1) 0px;
		}
		50% {
			height: 180px;
			background-position: 0px 200px;
		}
		100% {
			height: 180px;
			background-position: 0px 200px;
		}
	}

	@keyframes walkFrames {
		0% {
			background-position: calc(var(--_size) - 300px * -1) 225px;
		}
		49% {
			background-position: calc(var(--_size) - 300px * -1) 225px;
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
		60%{
			transform: scaleX(-1);
			left: -20%;
		}
		61%{
			transform: scaleX(1);
			left: -20%;
		}
		70%{
			transform: scaleX(1);
			left:-15%;
		}
		80%{
			transform: scaleX(1);
			left:15%;
		}
		81%{
			transform: scaleX(-1);
			left:15%;
		}
		90%{
			transform: scaleX(-1);
			left:10%;
		}
		99%{
			transform: scaleX(-1);
			left:0%;
		}
		100%{
			transform: scaleX(1);
			left:0%;
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
			background-position: calc(var(--_size) - 300px * -1) 600px;
		}
		49% {
			background-position: calc(var(--_size) - 300px * -1) 600px;
		}
		50% {
			background-position: 0px 600px;
		}
		100% {
			background-position: 0px 600px;
		}
	}

	@keyframes faint {
		0% {
			height: 175px;
			background-position: calc(var(--_size) - 300px * -1) 405px;
		}
		49% {
			height: 175px;
			background-position: calc(var(--_size) - 300px * -1) 405px;
		}
		50% {
			height: 175px;
			background-position: 0px 405px;
		}
		100% {
			height: 175px;
			background-position: 0px 405px;
		}
	}
	@keyframes eat-fish {
		0% {
			background-position: 600px 1015px;
		}
		49% {
			background-position: 600px 1015px;
		}
		50% {
			background-position: 1200px 1015px;
		}
		100% {
			background-position: 1200px 1015px;
		}
	}
	@keyframes eat-ice {
		0% {
			background-position: 600px 820px;
		}
		49% {
			background-position: 600px 820px;
		}
		50% {
			background-position: 1200px 820px;
		}
		100% {
			background-position: 1200px 820px;
		}
	}
</style>
