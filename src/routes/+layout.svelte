<script>
	import Logo from "$lib/Logo.svelte";
	import "$lib/app.css";
</script>

<main>
	<div class="varsling">
		<p class="container">Program kommer snart - følg med!</p>
	</div>
	<div>
		<Logo />

		<div id="innhold">
			<slot />
		</div>
	</div>
</main>

<style>
	.varsling {
		background-color: rgb(255, 219, 125);
		font-size: 1.2rem;
	}

	main {
		height: 100vh;
	}
</style>
