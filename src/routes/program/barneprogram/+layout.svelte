<script>
	import Nav from '$lib/Nav.svelte';
	import { page } from '$app/stores';
	import NavLink from '$lib/NavLink.svelte';
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
			<NavLink href="/program/barneprogram/scenekunst/#innhold">Scenekunst</NavLink>
			<NavLink href="/program/barneprogram/grønn-matkultur/#innhold">Grønn matkultur</NavLink>
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
