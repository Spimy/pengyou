<script lang="ts">
	import MobileHeader from '$lib/components/MobileHeader.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar></Navbar>
<MobileHeader></MobileHeader>

<slot />
