<svelte:head>
	<title>Siste nytt</title>
</svelte:head>

<main>
	<div class="container">
		<h2>Siste nytt</h2>
		<p>Straks kommer detaljert program for hele festivalen.</p>
	</div>
	<div class="nyhet container">
		<h3>Økonomisk støtte</h3>
		<div>
			<div class="div-img">
				<img
					width="460"
					height="640"
					alt="Gavebrev til Bakgårdsfestivalen 2022."
					src="/Økonomisk støtte.jpg"
				/>
			</div>
			<div class="div-p">
				<p>
					Økonomisk støtte til gjennomføring av Bakgårdsfestivalen Torsdag 12. mai fikk mottok Jon
					Edgar Karlsen på vegne av Foreningen Kammegaten 7 gavebrev fra Sparebank 1 stiftelsen til
					gjennomføring Bakgårdsfestivalen 2022. Det er første gang en slik festival blir arrangert
					og juryen la vekt på at en slik festival bidrar til en bredde og helhet i festivaltilbudet
					i Tønsberg. Tidligere har Tønsberg kommune innvilget søknader om støtte og 15. mai var det
					klart at også Tønsbergs Blad bidrar med støtte til dette non-profit arrangementet. Det har
					hele tiden vært et mål å gi denne festivalen gratis til Tønsberg og publikum. Med disse
					midlene blir det nå mulig.
				</p>
			</div>
		</div>
	</div>
</main>

<style>
	.nyhet > div {
		display: flex;
		justify-content: space-between;
	}

	.nyhet p {
		margin-left: 5%;
		margin-top: 0;
	}

	.nyhet > div > .div-img {
		flex: 40%;
	}

	.nyhet div > .div-p {
		flex: 60%;
	}

	.nyhet img {
		width: 100%;
		height: auto;
	}
</style>
