<script>
	import { enhance } from '$app/forms';

	export let data;
</script>

<h1>Authenticated as {data.user.username}</h1>

<form action="/?/logout" method="POST" use:enhance>
	<button class="" type="submit">Logout</button>
</form>
