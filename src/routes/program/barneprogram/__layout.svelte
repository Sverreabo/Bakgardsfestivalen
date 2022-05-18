<script>
	import Nav from '$lib/Nav.svelte';
</script>

<main>
	<div class="container">
		<div id="tilbake">
			<a href="/program/#innhold">&#8249; Tilbake</a>
		</div>
		<Nav>
			<a href="/program/voksenprogram/litteraturprogram/#innhold">Litteraturprogram</a>
			<a href="/program/voksenprogram/musikkprogram/#innhold">Musikkprogram</a>
			<a href="/program/voksenprogram/forfatterne/#innhold">Forfatterne</a>
		</Nav>
	</div>
	<slot />
</main>

<style>
	#tilbake {
		margin-bottom: 0.5rem;
	}

	#tilbake > a {
		color: rgb(35, 31, 32);
	}
</style>
