<script>
	import Nav from '$lib/Nav.svelte';
</script>

<svelte:head>
	<title>Program</title>
</svelte:head>

<main>
	<div class="container">
		<Nav>
			<a href="/program/voksenprogram/#innhold">Voksenprogram</a>
			<a href="/program/barneprogram/#innhold">Barneprogram</a>
		</Nav>
	</div>
	<slot />
</main>
