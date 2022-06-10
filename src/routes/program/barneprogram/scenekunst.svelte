<script>
	import '$lib/program.css';
</script>

<svelte:head>
	<title>Scenekunst</title>
</svelte:head>

<main class="container">
	<p>Scenekunst vil foregå i Kammegaten 7 - 9.</p>
	<div class="program">
		<h2>Fredag 10.6</h2>
		<ul>
			<li>
				<h3>11:30 - Kattas Figurteater presenterer: Boss stjeler showet</h3>
			</li>
			<li>
				<h3>13:00 - Kattas Figurteater presenterer: Boss stjeler showet</h3>
			</li>
			<li>
				<h3>15:00 til 17:00 - Tjøme Litterære Forum presenterer:</h3>
				<i>Eventyr fra mange land på mange språk </i>
			</li>
		</ul>
	</div>
	<div class="program">
		<h2>Lørdag 11.6</h2>
		<ul>
			<li>
				<h3>11:00 - Tjøme Litterære Forum presenterer på BABELS:</h3>
				<p>
					Utstillingen BARNDOM er åpen hele dagen.
					<a target="_blank" href="/BARNDOM.jpg">Les mer</a>
				</p>
				<p>Se også Tjøme Litterære Forums nettside:</p>
				<a target="_blank" href="https://www.havfrua.com/tjome-litteraere-forum/">
					https://www.havfrua.com/tjome-litteraere-forum/
				</a>
			</li>
			<li>
				<h3>11:30 - ÅPNING AV DAGEN ved KULTURSKOLEN: 3 elever spiller solo fiolin</h3>
			</li>
			<li>
				<h3>Tjøme Litterære Forum presenterer:</h3>
				<ul>
					<li>13:00: <i>Den lille høna med bæsj i ryggsekken</i></li>
					<li>13:30: <i>Grevlingsanger</i> med Even Tømte</li>
				</ul>
			</li>
			<li>
				<h3>14:00 - Kattas figurteater presenterer: Spillet i Fjæra</h3>
			</li>
			<li>
				<h3>
					15:00 - Tønsberg Amatørteater med utdrag fra <q>Jul i Blåfjell</q> og
					<q>Olsenbanden jr</q>
				</h3>
			</li>
			<li>
				<h3>15:15 - Extend Art of dance</h3>
			</li>
			<li>
				<h3>Tjøme Litterære Forum presenterer:</h3>
				<ul>
					<li>
						15:30: <i>Konstabel bannefinger</i> og <i>Doktor Even</i> med Kristian Mehlum Lie
					</li>
					<li>16:00: <i>Mot og Mysterier</i> med Frode Eie Larsen</li>
					<li>16:30: Arkin- serien med H.L.Phoenix</li>
					<li>17:00: Tegnegøy med den prisvinnende tegneren H.L.Phoenix</li>
				</ul>
				<p>Se videosnutt om Konstabel bannefinger:</p>
				<!-- svelte-ignore a11y-media-has-caption -->
				<video controls>
					<source src="/Konstabel bannefinger.mp4" type="video/mp4" />
				</video>
			</li>
		</ul>
	</div>
</main>

<style>
	video {
		width: 100%;
		height: auto;
		margin: 0;
	}
</style>
