<script>
	import Logo from '$lib/Logo.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<main class="flex flex-space-between flex-column">
	<div>
		<Logo />

		<div id="innhold">
			<slot />
		</div>
	</div>

	<Footer />
</main>

<style>
	main {
		height: 100vh;
		padding-top: 2vw;
	}
</style>
