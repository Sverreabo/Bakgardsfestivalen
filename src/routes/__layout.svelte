<script>
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
</script>

<main>
	<div class="container">
		<div class="relative">
			<div class="Nav">
				<Nav />
			</div>
			<div class="relative">
				<img id="logo-img" width="512" height="613" alt="" src="/logo.svg" />
				<img id="prikk-img" alt="" src="/ring_over_aa.svg" />
			</div>
		</div>

		<div class="flex flex-space-between">
			<h1>Tønsberg</h1>
			<h1>10.-11 juni 2022</h1>
		</div>

		<div id="innhold">
			<slot />
		</div>
	</div>
</main>

<style>
	h1 {
		margin: 0 3px;
		/* color: rgb(35, 31, 32); */
		font-size: 2.5rem;
		letter-spacing: -1px;
	}

	.container {
		width: min(80%, 512px);
		margin: 0 auto;
	}

	.relative {
		position: relative;
	}

	#logo-img {
		width: 100%;
		height: auto;
	}

	#prikk-img {
		position: absolute;
		top: 17.5%;
		left: 100.5%;
		width: calc(min(80%, 512px) * 0.1);
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
		}

		.container {
			width: 90%;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>
