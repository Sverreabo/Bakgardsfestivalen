<script>
	import Nav from '$lib/Nav.svelte';
	import { page } from '$app/stores';
	import NavLink from '$lib/NavLink.svelte';
</script>

<main>
	<div class="container">
		<h2>Voksenprogram</h2>
		<div id="tilbake">
			<a
				href={$page.url.pathname === '/program/voksenprogram/'
					? '/program/#innhold'
					: '/program/voksenprogram/#innhold'}>&#8249; Tilbake</a
			>
		</div>
		<Nav>
			<NavLink href="/program/voksenprogram/litteraturprogram/#innhold">
				Litteraturprogram &raquo;
			</NavLink>
			<NavLink href="/program/voksenprogram/musikkprogram/#innhold">Musikkprogram</NavLink>
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
