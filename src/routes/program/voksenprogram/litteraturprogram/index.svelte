<script>
	import '$lib/program.css';
</script>

<svelte:head>
	<title>Litteraturprogram</title>
</svelte:head>

<main class="container">
	<p>
		Litteraturdelen vil foregå i bakgården i Øvre Langgate 63, inngang ved siden av
		blomsterbutikken.
	</p>
	<div class="program">
		<h2>Fredag 10.6</h2>
		<ul>
			<li>
				<h3>17:00 - Tjøme Litterære Forum åpner utstillingen BARNDOM</h3>
				<p>Tjøme Litterære Forum presenterer:</p>
				<ul>
					<li><i>Barndom fra 1950-1980</i> - Kristin von Hirch</li>
					<li><i>Før himmelen roper deg hjem</i> - Eva Mjøen Brantenberg</li>
				</ul>
			</li>
			<li>
				<h3>18:00 - Kulturmannen og Kulturkjerringa</h3>
				<p>
					Journalist og forfatter Marta Breen foredrar om forholdet mellom kvinner og menn i
					kulturlivet. Kommentar ved sosiolog og førstelektor Rønnaug Sørensen. Vert: Norunn
					Askeland.
				</p>
				<div class="flex">
					<div style="flex: 57.14%;">
						<figure>
							<img width="768" height="768" alt="Marta Breen" src="/Marta Breen.jpg" />
							<figcaption>Marta Breen</figcaption>
						</figure>
					</div>
					<div style="flex: 42.86%;">
						<figure>
							<img width="240" height="320" alt="Rønnaug Sørensen" src="/Rønnaug Sørensen.jpg" />
							<figcaption>Rønnaug Sørensen</figcaption>
						</figure>
					</div>
				</div>
			</li>
			<li>
				<h3>19:00 - Fra gangster til forfatter</h3>
				<p>
					Christian René Wold gikk fra å være en skoleflink gutt til å bli tung rusmisbruker og
					farlig kriminell. Men et møte med bøkenes verden og noen som så hans potensiale endret
					livet hans. Samtaleleder Jan Mehlum.
				</p>
				<img
					class="p50"
					width="585"
					height="877"
					alt="Christian René Wold"
					src="/Fra gangster til forfatter.jpg"
				/>
			</li>
		</ul>
	</div>
	<div class="program">
		<h2>Lørdag 11.6</h2>
		<ul>
			<li>
				<h3>17:30 - Unge stemmer</h3>
				<p>Ungdom leser egne tekster om tilhørighet og geografi. Vert: Ingunn U-M Rasting.</p>
				<p>
					«Unge stemmer» er et skriveprosjekt med skrivekurs for ungdom i regi av tidsskriftet KULT.
					Unge fra videregående skoler som har deltatt på kursene skal lese egne tekster på
					Bakgårdsfestivalen. Elisa Dahle og Tobias Nørstebø-Vartdal er blant de som skal lese
					tekstene sine.
				</p>
				<figure>
					<div class="flex">
						<div>
							<img width="554" height="774" alt="Elise Dahle" src="/Elise Dahle.jpg" />
						</div>
						<div>
							<img
								width="554"
								height="774"
								alt="Tobias Nørstebø-Vartdal"
								src="/Tobias Nørstebø-Vartdal.jpg"
							/>
						</div>
					</div>
					<figcaption>Elisa Dahle og Tobias Nørstebø-Vartdal. Foto: Cedric Archer</figcaption>
				</figure>
			</li>
			<li>
				<h3>18:00 - Tønsberg og jeg</h3>
				<p>Om lokal identitet. Samtale med Anders Børringbo mfl. Vert: Thorleif Bugge</p>
			</li>
			<li>
				<h3>19:00 - Journalistens bilder fra krig og konflikter</h3>
				<p>
					Anders Sømme Hammer deler sine erfaringer fra Afghanistan, Syria, Hong Kong og Ukraina.
					Samtaleleder Jan Mehlum.
				</p>
				<img
					class="p50"
					width="586"
					height="878"
					alt="Anders Sømme Hammer"
					src="/Journalistens rapport fra krig og konflikter.jpg"
				/>
			</li>
		</ul>
	</div>
</main>

<style>
	img,
	figure {
		width: 100%;
		height: auto;
		margin: 0;
	}

	figcaption {
		color: rgb(35, 31, 32);
		font-style: italic;
		font-size: 16px;
	}

	.p50 {
		width: 50%;
	}
</style>
