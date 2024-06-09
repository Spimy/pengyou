<script>
	let input;
	let image;
	let placeholder;
	let showImage = false;

	function onChange() {
		const file = input.files[0];

		if (file) {
			showImage = true;

			const reader = new FileReader();
			reader.addEventListener('load', function () {
				image.setAttribute('src', reader.result);
			});
			reader.readAsDataURL(file);

			return;
		}
		showImage = false;
	}
</script>

<div class="card card--black imgIn--card">
	<div class="card card--glass imgIn--content">
		{#if showImage}
			<img bind:this={image} src="" alt="Preview" class="imgIn--preview" />
			<button class="btn--alternate imgIn--preview--btn">Confirm</button>
		{:else}
			<button class="btn--alternate imgIn--btn--pic">Take a picture</button>
			<p class="imgIn--OR">OR</p>
			<label for="imgIn-upload" class="card card--glass imgIn--upload">
				Custom Upload<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-text-scan-2"
					width="160"
					height="160"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="var(--clr-primary-100)"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
					<path d="M4 16v2a2 2 0 0 0 2 2h2" />
					<path d="M16 4h2a2 2 0 0 1 2 2v2" />
					<path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
					<path d="M8 12h8" />
					<path d="M8 9h6" />
					<path d="M8 15h4" />
				</svg></label
			>
			<input id="imgIn-upload" class="invisible" type="file" />
		{/if}
	</div>
</div>

<style>
	.imgIn--card {
		font-size: 16px;
		margin-top: var(--margin);
		margin-bottom: var(--margin);
		text-align: center;
	}

	.imgIn--content {
		width: 100%;
		flex-direction: column;
	}

	.imgIn--btn--pic {
		margin: auto;
		width: 50%;
		max-width: 300px;
	}

	.imgIn--OR {
		margin: auto;
		font-size: 48px;
		font-weight: 800;
	}

	.imgIn--upload {
		margin: auto;
		display: flex;
		flex-direction: column;
	}

	input[type='file'] {
		display: none;
	}

	.imgIn--preview {
		border-radius: var(--border-radius);
	}

	.imgIn--preview--btn {
		margin-top: var(--margin);
		margin-bottom: var(--margin);
	}
</style>
