<script>
	import Nav from "$lib/Nav.svelte";
	import NavLink from "$lib/NavLink.svelte";
</script>

<main>
	<div class="container">
		<div class="relative">
			<div class="Nav">
				<Nav small={true}>
					<NavLink href="/om-festivalen/#innhold">
						Om festivalen
					</NavLink>
					<NavLink href="/program/#innhold">Program</NavLink>
					<NavLink href="/barneprogram/#innhold">Barneprogram</NavLink
					>
					<NavLink href="/siste-nytt/#innhold">Siste nytt</NavLink>
					<NavLink href="/bli-frivillig/#innhold"
						>Bli frivillig?</NavLink
					>
				</Nav>
			</div>
			<div class="relative">
				<img
					id="logo-img"
					width="512"
					height="613"
					alt=""
					src="/logo.svg"
				/>
				<img id="prikk-img" alt="" src="/ring_over_aa.svg" />
			</div>
		</div>

		<div class="center-text">
			<h1>Tønsberg 8-10 juni 2023</h1>
		</div>
	</div>
</main>

<style>
	main {
		margin: 0.8rem 0;
	}

	h1 {
		margin: 0 0.12rem;
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
