<script>
	import Nav from "$lib/Nav.svelte";
	import NavLink from "$lib/NavLink.svelte";
</script>

<svelte:head>
	<title>Program</title>
</svelte:head>

<main>
	<div class="container">
		<h2>Program kommer snart</h2>
		<!-- <Nav>
			<NavLink href="/program/voksenprogram/#innhold">Voksenprogram &raquo;</NavLink>
			<NavLink href="/program/barneprogram/#innhold">Barneprogram &raquo;</NavLink>
		</Nav> -->
	</div>
	<slot />
</main>
