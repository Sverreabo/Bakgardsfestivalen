<script>
	import Nav from "$lib/Nav.svelte";
	import NavLink from "$lib/NavLink.svelte";
</script>

<svelte:head>
	<title>Program</title>
</svelte:head>

<main>
	<div class="container">
		<h2>Hva skjer på...</h2>
	</div>
	<div class="container container-fill-small relative">
		<div class="over-img over-img-dark">
			<Nav>
				<div class="flex flex-space-around">
					<div>
						<NavLink href="/program/torsdag/#innhold"
							>torsdag?</NavLink
						>
					</div>
					<div>
						<NavLink href="/program/fredag/#innhold"
							>fredag?</NavLink
						>
					</div>
					<div>
						<NavLink href="/program/lørdag/#innhold"
							>lørdag?</NavLink
						>
					</div>
				</div>
			</Nav>
		</div>
		<div />
	</div>
</main>

<style>
	main :global(a) {
		text-decoration: underline !important;
	}
</style>
