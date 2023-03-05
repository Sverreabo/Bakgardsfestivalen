<script>
	import Logo from '$lib/Logo.svelte';
	import '$lib/app.css';
	import { page } from '$app/stores';
</script>

<main class="flex flex-space-between flex-column">
	<div>
		<Logo />

		<div id="innhold">
			<slot />
		</div>
	</div>
</main>

<style>
	main {
		height: 100vh;
		padding-top: 2vw;
	}
</style>
