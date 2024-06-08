<script>
	import { enhance } from '$app/forms';
</script>

<form class="pt-32" method="POST" enctype="multipart/form-data" use:enhance>
	<label for="receipt">Receipt</label>
	<input type="file" name="receipt" id="receipt" />

	<input type="text" name="test" id="test" />
	<button type="submit" class="p-5 bg-red-500">Upload</button>
</form>
