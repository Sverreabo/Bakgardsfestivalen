<script>
	import Nav from '$lib/Nav.svelte';
	import { page } from '$app/stores';
</script>

<main>
	<div class="container">
		<h2>Barneprogram</h2>
		<div id="tilbake">
			<a
				href={$page.url.pathname === '/program/barneprogram/'
					? '/program/#innhold'
					: '/program/barneprogram/#innhold'}>&#8249; Tilbake</a
			>
		</div>
		<Nav>
			<a href="/program/barneprogram/#innhold">Litteraturprogram</a>
			<a href="/program/barneprogram/#innhold">Musikkprogram</a>
			<a href="/program/barneprogram/#innhold">Scenekunst</a>
			<a href="/program/barneprogram/#innhold">Grønn matkultur</a>
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
