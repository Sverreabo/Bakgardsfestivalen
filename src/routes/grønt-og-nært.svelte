<svelte:head>
	<title>Grønt og nært</title>
</svelte:head>

<main>
	<div class="relative">
		<div class="over-img">
			<h2>Grønt og nært</h2>
		</div>
		<div class="container-wide">
			<picture>
				<source media="(min-width: 1080px)" srcset="/Geitmyra_short.jpg" />
				<img id="img-geitmyra" width="1634" height="1080" alt="" src="/Geitmyra.jpg" />
			</picture>
		</div>
		<div class="over-img" id="text-over-img">
			<p>
				I bakgården, med inngangen ved siden av Tønsberg Optiske i Kammegaten 5, blir det grønn
				matkultur. Det er Geitmyra matkultursenter som står for organisering og innhold. De skriver
				om seg selv på sin nettside: Vi jobber for å pirre nysgjerrighet, dyrke kunnskap og øke
				matgleden til barna som kommer til oss. Og vi vet at barn kan lage mat, de tørr å smake og
				at de må tas på alvor. Når barna lærer å ta gode matvalg gir vi dem kunnskap de kan dra
				nytte av gjennom hele livet. Det er dette som er ideen med å lage en egen grønn bakgård
				under festivalen.
			</p>
		</div>
	</div>

	<div class="container">
		<p>Aktiviteter blir:</p>
		<ul>
			<li>Smak en plante/spis en blomst</li>
			<li>Lage frøbomber Sjekk den belgen!</li>
			<li>Smak påbelgfrukt, så ertespirer</li>
		</ul>
		<p>
			Vi håper også å kunne grille sesongens grønnsaker, hvis sikkerheten tillater det på denne
			tørre tiden av året.
		</p>
		<div class="flex onsmall-no-flex">
			<div id="div-bia">
				<img id="img-bia" width="955" height="955" alt="Bia til Pia logo" src="/bia til pia.png" />
			</div>
			<p>
				Uansett kommer <a href="https://biatilpia.no/" target="_blank">Bia til Pia</a> fra Sandefjord.
				Hun formidler kunnskap om bier, birøkt og den viktige rollen biene har i vårt økosystem. Dette
				formidles til barna gjennom lek, underholdning og workshop. Det blir dermed lettere å sette pris
				på og ta vare på biene våre som er en viktig pollinator.
			</p>
		</div>
	</div>
</main>

<style>
	.over-img {
		position: absolute;
		width: 100%;
		background-color: rgba(155, 204, 145, 0.5);
	}

	.over-img > * {
		margin-left: calc((100vw - var(--container-width)) / 2);
		width: var(--container-width);
	}

	#text-over-img {
		bottom: 0;
		background-color: rgba(35, 31, 32, 0.7);
		color: white;
		font-size: 1.2rem;
	}

	#img-geitmyra {
		width: 100%;
		height: auto;
	}

	#div-bia {
		order: 1;
	}

	#img-bia {
		width: 100%;
		height: min-content;
	}

	@media (max-width: 640px) {
		#text-over-img {
			position: relative;
			background-color: initial;
			color: initial;
		}

		#div-bia {
			width: 10rem;
			margin: 0 auto;
		}
	}
</style>
