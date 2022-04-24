<script>
	import Nav from "./Nav.svelte";
	export let name;
</script>

<main>
	<div class="container">
		<div class="relative">
			<div class="Nav">
				<Nav />
			</div>
			<div class="relative">
				<img
					id="logo-img"
					width="2058"
					height="2550"
					alt=""
					src="logo.png"
				/>
				<img id="prikk-img" alt="" src="prikk.png" />
			</div>
		</div>

		<div class="flex flex-space-between">
			<h1>Tønsberg</h1>
			<h1>dato</h1>
		</div>

		<section id="Om_festivalen">
			<h1>Om festivalen</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
				non aliquam voluptatem quos dolorem earum quo nisi laborum
				velit? Adipisci, iusto corporis repellat in eveniet facilis eos
				hic ipsam fugiat? Obcaecati, repudiandae dicta corrupti facilis
				eos fugit cum. Sapiente adipisci eius possimus tenetur voluptas
				quas dolorem sed dolore, maiores voluptate est numquam
				architecto nemo quis impedit laboriosam perspiciatis? Suscipit,
				culpa!
			</p>
		</section>

		<section id="Program">
			<h1>Program</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Obcaecati, accusantium? Asperiores quia voluptas velit fugiat
				reprehenderit quaerat ipsa nulla, porro officiis esse possimus?
				Quidem aliquam culpa veniam, quos magnam nihil. Eos, nobis
				repellat reprehenderit soluta incidunt officia facere libero
				ullam explicabo quidem a quasi recusandae eveniet exercitationem
				nisi, cum voluptas, nostrum corporis numquam veniam nam. Sint
				doloremque nostrum velit! Reprehenderit.
			</p>
		</section>
	</div>
</main>

<style>
	h1 {
		margin: 0;
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
		width: calc(min(80%, 512px) * 0.12);
	}

	.Nav {
		z-index: 1;
		position: absolute;
		top: 35%;
		left: 34%;
	}

	h1 {
		color: rgb(35, 31, 32);
		font-size: 3rem;
		letter-spacing: -1px;
	}

	section h1 {
		font-size: 2rem;
	}

	@media (max-width: 640px) {
		.Nav {
			position: static;
			margin-left: 14.5%;
		}
	}
</style>
