<script>
	import Logo from "$lib/Logo.svelte";
	import "$lib/app.css";
</script>

<main>
	<div class="varsling center-text">
		<p>Program kommer snart - følg med!</p>
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

	.varsling > p {
		margin: 0;
		padding: 0.5rem 0;
	}

	#innhold {
		padding-bottom: 0.5rem;
	}
</style>
