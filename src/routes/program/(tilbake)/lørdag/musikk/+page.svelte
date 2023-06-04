<script>
    import Hjerter from "$lib/Hjerter.svelte";
    import "$lib/musikk.css";
</script>

<svelte:head>
    <title>Musikk på lørdag</title>
</svelte:head>

<main class="musikk">
    <div id="Toensberg sangforening">
        <div class="container">
            <h2 class="center-text">Tønsberg sangforening</h2>
        </div>
        <h3 class="tidspunkt">Lørdag 18:00 - 18:20</h3>
        <div class="container flex flex-children-grow">
            <div style="padding-right: 1rem; flex: 0.4;">
                <img
                    src="/Toensberg sangforening.png"
                    width="100"
                    height="123"
                    alt="Tønsberg sangforening logo"
                />
            </div>
            <div>
                <img src="/Sang grafikk.png" width="305" height="165" alt="" />
            </div>
        </div>
        <div class="container">
            <p>
                Tønsberg sangforening er Norges nest eldste kor, i Norges eldste
                by
            </p>
        </div>
    </div>
    <Hjerter />
    <div id="Tunsberg-Vintage-Orchestra">
        <div class="container">
            <img src="/Orchestra header.png" width="1094" height="277" alt="" />
            <h3 class="tidspunkt">Lørdag 18:30 - 1915</h3>
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
    <Hjerter />
    <div id="Astoria">
        <div class="container container-fill-small relative">
            <div class="over-img">
                <h2 style="color: black; float:right;">Astoria</h2>
            </div>
            <img src="/Astoria.jpg" width="1200" height="800" alt="Astoria" />
        </div>
        <h3 class="tidspunkt">Lørdag 19:30 - 19:50</h3>
        <div class="container">
            <p>
                Astoria er en alternativ og elektronisk duo fra Tønsberg, som
                består av fetterne Edvard og Henrik Mortensholm. Du kan
                fortvente tunge beats, svevende synther, skjør gitar, enorme og
                seige basslinjer og vokal som preges av frustrasjon og lengsel.
            </p>
        </div>
    </div>
    <Hjerter />
    <div id="Tog-Te-Byn">
        <div class="container">
            <h2>TOG TE BY'N</h2>
        </div>
        <div class="container container-fill-small">
            <video width="1080" height="1920" controls muted autoplay loop>
                <source src="/Tog Te Byn.mp4" type="video/mp4" />
            </video>
        </div>
        <h3 class="tidspunkt">Lørdag 20:00 - 20:40</h3>
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
                Olav Gohli, som synger og spiller gitar i "Tog te by'n". "Hans
                dikteriske verden består av bymiljøer, landstrykere og
                togloffere, forventningsfulle ungdommer, middelaldrende
                kjærestepar og gammel livsvisdom. Og selvsagt handler det om
                kjærligheten. Den man håper å finne, den som ikke fins, den som
                er rusten og den som ikke er der lenger. Når vi synger og
                spiller disse sangene på norsk, kommer de nærmere oss -- likevel
                er det umiskjennelig Tom Waits' verden vi er inne i, en verden
                av rock, blues, jazz og poesi."
            </p>
            <p>
                "Vi har spilt sammen i noen år nå og har rundt 40 sanger med
                norske tekster. På konsert spiller vi halvparten av dem, og
                skifter ut noen underveis. Ingen konsert er lik."
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
        <h3 class="tidspunkt">Lørdag 21:00 - 21:40</h3>
        <div class="container">
            <p>
                <b>Pipe Lines</b> er rutinert pop/rock band som har holdt på kontinuerlig
                i 50 år, hobbybasis. Spiller alt fra The Shadows-Status Quo 1960
                -1980. Eget PA anlegg for ute /inne med egen lydteknikker. På YouTube
                kan dere se noen produksjoner under Pipe Lines 50 år. Vi har bygd
                opp en historisk fortelling under fremførelsen av melodiene.
            </p>
        </div>
    </div>
    <Hjerter />
    <div id="Goylem-Space-Klezmer">
        <div class="container container-fill-small relative">
            <div class="over-img" style="bottom: 0;">
                <h2>Goylem Space Klezmer</h2>
            </div>
            <img
                src="/Goylem.jpg"
                width="1642"
                height="1095"
                alt="Goylem Space Klezmer"
            />
        </div>
        <h3 class="tidspunkt">Lørdag 22:00 - 23:00</h3>

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
            <iframe
                src="https://www.youtube.com/embed/n6MagmZRU2w"
                title="Goylem Space Klezmer live at Rockefeller"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            />
        </div>
    </div>
</main>
