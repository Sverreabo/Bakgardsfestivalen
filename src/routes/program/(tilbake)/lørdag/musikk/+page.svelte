<script>
    import Hjerter from "$lib/Hjerter.svelte";
    import "$lib/musikk.css";
</script>

<svelte:head>
    <title>Musikk på lørdag</title>
</svelte:head>

<main>
    <br />
    <div id="Goylem">
        <div class="container container-fill-small relative">
            <div class="over-img" style="bottom: 0;">
                <h2>Goylem</h2>
            </div>
            <img src="/Goylem.jpg" width="1642" height="1095" alt="Goylem" />
        </div>
        <div class="container">
            <p>
                Det forrykende norske orkesteret Goylem Space Klezmer lager
                innovativ og fengende musikk, med en fot i tradisjonell klezmer
                og “mange andre føtter og lemmer” i balkanjazz, midtøstenske
                danserytmer, psykedelisk prog og sci-fi elektronika. Goylem er
                kjent for sine overraskende og livlige konserter. Erlend
                Barratt-Due Solum – klarinett. Nikolai Aurebekk Handeland –
                trekkspill. Øystein Hvamen Rasmussen – perkusjon. Hans Erik
                Wagner – kontrabass.
            </p>
        </div>
    </div>
    <Hjerter />
    <div id="Pipe-Lines">
        <div class="container">
            <h2>PIPE LINES</h2>
        </div>
        <div class="container container-fill-small">
            <iframe
                src="https://www.youtube.com/embed/j9mJBvkx9cw"
                title="Pipe Lines"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            />
        </div>
        <div class="container">
            <p>
                <b>Pipe Lines</b> er rutinert pop/rock band som har holdt på kontinuerlig
                i 50 år, hobby basis. Spiller alt fra The Shadows-Status Quo 1960
                -1980. Eget PA anlegg for ute /inne med egen lyd teknikker. På YouTube
                kan dere se noen produksjoner under Pipe Lines 50 år. Vi har bygd
                opp en historisk fortelling under fremførelsen av melodiene.
            </p>
        </div>
    </div>
    <Hjerter />
    <div id="Tog-Te-Byn">
        <div class="container">
            <h2>TOG TE BY'N</h2>
        </div>
        <div class="container container-fill-small">
            <video controls muted autoplay loop>
                <source src="/Tog Te Byn.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="container">
            <p>
                Lørdag 10. juni får du en hel konsert med fullt band som spiller
                sanger av den fantastiske låtskriveren Tom Waits. Ikke bare det,
                bandet "Tog te by'n" synger på norsk.
            </p>
        </div>
        <div class="container container-fill-small">
            <img
                src="/Tog Te Byn.jpg"
                width="923"
                height="409"
                alt="Tog te by'n"
            />
        </div>
        <div class="container">
            <p>
                "Tom Waits er en av de største låtskriverne i vår tid", sier
                Olav Gohli, som synger og spiller gitar i "Tog te by'n".
                <br />
                "Hans dikteriske verden består av bymiljøer, landstrykere og togloffere,
                forventningsfulle ungdommer, middelaldrende kjærestepar og gammel
                livsvisdom. Og selvsagt handler det om kjærligheten. Den man håper
                å finne, den som ikke fins, den som er rusten og den som ikke er
                der lenger. Når vi synger og spiller disse sangene på norsk, kommer
                de nærmere oss -- likevel er det umiskjennelig Tom Waits' verden
                vi er inne i, en verden av rock, blues, jazz og poesi."
            </p>
            <p>
                "Vi har spilt sammen i noen år nå og har rundt 40 sanger med
                norske tekster. På konsert spiller vi halvparten av dem, og
                skifter ut noen underveis. Ingen konsert er lik."
            </p>
        </div>
    </div>
    <Hjerter />
    <div id="Tunsberg-Vintage-Orchestra">
        <div class="container">
            <img src="/Orchestra header.png" width="1094" height="277" alt="" />
            <p>
                Tunsberg Vintage Orchestra er et svingende ensemble som spiller
                underholdningsmusikk fra 1920 – 30 tallet.
            </p>
            <img
                src="/Tunsberg Vintage Orchestra.jpg"
                width="773"
                height="512"
                alt="Tunsberg Vintage Orchestra"
            />
            <p>
                Orkesteret henter repertoaret fra jazzen og
                revy-underholdningsmusikken som regjerte i Europa på den tiden.
                Orkesteret har og funnet frem musikk som ble spilt på Victoria
                Hotel i Tønsberg i denne perioden.
            </p>
        </div>
    </div>
</main>
