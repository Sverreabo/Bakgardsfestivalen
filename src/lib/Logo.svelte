<script>
	import Nav from '$lib/Nav.svelte';
</script>

<main>
	<div class="container">
		<div class="relative">
			<div class="Nav">
				<Nav small={true}>
					<a href="/om-festivalen#innhold">Om festivalen</a>

					<a href="/program#innhold">Program</a>

					<a href="/grønn-matkultur#innhold">Grønn matkultur</a>

					<a href="/siste-nytt#innhold">Siste nytt</a>
					<a href="/hjelpe-til#innhold">Hjelpe til?</a>
				</Nav>
			</div>
			<div class="relative">
				<img id="logo-img" width="512" height="613" alt="" src="/logo.svg" />
				<img id="prikk-img" alt="" src="/ring_over_aa.svg" />
			</div>
		</div>

		<div class="flex flex-wrap flex-space-between">
			<h1>Tønsberg</h1>
			<h1>10.-11. juni 2022</h1>
		</div>
	</div>
</main>

<style>
	h1 {
		margin: 0 0.12rem;
		/* color: rgb(35, 31, 32); */
		font-size: 2.5rem;
		letter-spacing: -1px;
	}

	img {
		height: auto;
	}

	#logo-img {
		width: 100%;
	}

	#prikk-img {
		position: absolute;
		top: 17.5%;
		left: 101%;
		width: calc(var(--container-width) * 0.08);
	}

	.Nav {
		z-index: 1;
		position: absolute;
		top: 35%;
		left: 34%;
	}

	@media (max-width: 640px) {
		.Nav {
			position: static;
			margin-left: 14.5%;
			margin-bottom: 3vw;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>
