<script>
	import Nav from '$lib/Nav.svelte';
</script>

<main class="container">
	<Nav>
		<a href="/program">Program</a>
		<a href="/program/forfatterene">Forfatterene</a>
	</Nav>
	<slot />
</main>
