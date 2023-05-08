<script>
	import Nav from "$lib/Nav.svelte";
	import NavLink from "$lib/NavLink.svelte";
	import Bilder from "$lib/Bilder.svelte";
</script>

<svelte:head>
	<title>Program</title>
</svelte:head>

<main>
	<div class="container">
		<h2>Hva skjer på...</h2>
	</div>
	<div class="container container-fill-small relative">
		<div class="h100 over-img">
			<div
				class="flex flex-space-around flex-children-grow children-flex-center"
			>
				<div>
					<div>
						<h2>torsdag?</h2>
					</div>
				</div>
				<div>
					<div>
						<h2>fredag?</h2>
						<ul>
							<a href="fredag/litteratur">
								<li>Litteratur</li>
							</a>
							<a href="fredag/musikk">
								<li>Musikk</li>
							</a>
						</ul>
					</div>
				</div>
				<div>
					<div>
						<h2>lørdag?</h2>
						<ul>
							<a href="lørdag/litteratur">
								<li>Litteratur</li>
							</a>
							<a href="lørdag/musikk">
								<li>Musikk</li>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div>
			<img
				class="blur"
				src="/Unge stemmer 2022.jpg"
				alt="Unge stemmer"
				width="1170"
				height="884"
			/>
		</div>
	</div>
	<!-- <div class="container">
		<h2>Hvem kommer?</h2>
	</div>
	<div class="container container-fill-small">
		<Bilder
			bilder={[
				{
					src: "/Abida-Raja-Frihetens-oyeblikk.jpg",
					w: 671,
					h: 1021,
					text: "Lørdag 19:00",
				},
				{
					src: "/Elling.jpg",
					w: 634,
					h: 992,
					text: "Fredag 18:00",
				},
				{
					src: "/Eriksen Syv meninger med livet.jpg",
					w: 775,
					h: 1200,
					text: "Fredag 19:00",
				},
			]}
		/>
	</div> -->
</main>

<style>
	a {
		text-decoration: underline !important;
	}

	.over-img h2 {
		font-weight: normal;
		margin: 0.5rem;
		margin-bottom: 0;
	}

	ul {
		padding-inline-start: 30px;
		font-size: 1rem;
		margin-top: 0;
		list-style-type: circle;
	}

	li {
		padding: 0.1rem 0;
	}
	a {
		color: black;
	}
</style>
