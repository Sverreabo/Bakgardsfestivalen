<script>
	import Nav from '$lib/Nav.svelte';
</script>

<main>
	<div class="container">
		<Nav>
			<a href="/program/#innhold">Program</a>
			<a href="/program/musikkprogram/#innhold">Musikkprogram</a>
			<a href="/program/forfatterene/#innhold">Forfatterene</a>
		</Nav>
	</div>
	<slot />
</main>
