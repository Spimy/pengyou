<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1>Register</h1>
<form method="POST" use:enhance>
	<label for="email">Email</label>
	<input name="email" id="email" /><br />
	<label for="username">Username</label>
	<input name="username" id="username" /><br />
	<label for="password">Password</label>
	<input type="password" name="password" id="password" /><br />
	<button type="submit">Register</button>
</form>
