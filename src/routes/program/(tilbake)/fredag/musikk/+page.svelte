<script>
    import Hjerter from "$lib/Hjerter.svelte";
    import "$lib/musikk.css";
</script>

<svelte:head>
    <title>Musikk på fredag</title>
</svelte:head>

<main class="musikk">
    <h3 class="tidspunkt">Fredag 18:30 - 18:50</h3>
    <div id="Bjoernholdt-og-Landsverk">
        <div class="container">
            <img
                src="/Bjoernholdt og Landsverk.jpg"
                width="480"
                height="640"
                alt="Bjoernholdt og Landsverk"
            />
        </div>
    </div>
    <Hjerter />
    <div id="Færderfyrene">
        <h3 class="tidspunkt">Fredag 19:30 - 20:50</h3>

        <div class="container container-fill-small relative">
            <div class="over-img">
                <h2>Færderfyrene</h2>
            </div>
            <figure>
                <img
                    src="/Færderfyrene.jpg"
                    width="1334"
                    height="750"
                    alt="Færderfyrene"
                />
                <figcaption class="container">
                    Fra venstre Magne Mithjell, Jon Edgar Karlsen, Espen Lohne,
                    Thor Olav Hillestad, Rolf Dolven, Geir Salvesen, Bjørn
                    Ragnar Berg, Erik Eliassen og Knut Øvsthus
                </figcaption>
            </figure>
        </div>
        <div class="container">
            <p>
                Færderfyrene har holdt sammen siden 1992. De har et variert
                repertoar, men trives best med å ta for seg låter fra 60 og 70
                tallet, lage norsk tekst gjerne med en lokal vri. Vokale
                arrangementer blandes med gitarer, trekkspill og bass.
            </p>
        </div>
    </div>
    <Hjerter />
    <div id="Lion-and-The-Lamb">
        <h3 class="tidspunkt">Fredag 20:45 - 21:30</h3>

        <div class="container container-fill-small relative">
            <div class="over-img">
                <h2 style="margin-top: 0.5rem; float:right;">
                    LION & THE LAMB
                </h2>
            </div>
            <div>
                <img
                    src="/Lion and The Lamb.jpg"
                    width="1082"
                    height="895"
                    alt="Lion & The Lamb"
                />
            </div>
        </div>
        <div class="container">
            <div>
                <img
                    class="p60 float-right"
                    src="/Lion and the Lamb avisutklipp.jpg"
                    width="604"
                    height="819"
                    alt="Lion and The Lamb avisutklipp: 'Rett fra kjøkkenet til platestudio!'"
                />
                <p>
                    <b>LION & THE LAMB – Reunion</b><br />
                    Lion & The Lamb er en duo fra Horten og Tønsberg, som ga ut sin
                    eneste LP i 1978 inspirert av den amerikanske vestkystrocken
                    på den tiden, særlig Crosby, Stills & Nash. Innspillingen foregikk
                    i Rosenborg Studio, med Johnny Sareussen som produsent. Polydor
                    sørget for at bandet ble backet av en rekke gode musikere, inkludert
                    Freddy Lindquist, Terje Venaas, Knut Riisnæs, Brynjulf Blix,
                    Audun Kleive og Iver Kleive. Plateslippet fant sted på Klingenberg
                    Kino, der også Jonas Fjeld Band spilte. I 1978 delte Lion & The
                    Lamb scene med Bob Marley under Hortensfestivalen. Albumet har
                    blitt omtalt som en av norsk softrocks best skjulte skatter.
                </p>
            </div>
        </div>
    </div>
    <Hjerter />
    <div id="Linda-Kvam-Band">
        <h3 class="tidspunkt">Fredag 22:00 - 23:00</h3>

        <div class="container container-fill-small relative">
            <div class="over-img">
                <h2>LINDA KVAM BAND</h2>
            </div>
            <div>
                <img
                    src="/Linda Kvam Band Stort.jpg"
                    width="960"
                    height="584"
                    alt="Linda Kvam Band"
                />
            </div>
        </div>
        <div id="kvam-blue" class="container container-fill-small flex">
            <div style="flex: 40%;">
                <img
                    src="/Kvam naerbilde.jpg"
                    width="474"
                    height="830"
                    alt="Linda Kvam"
                />
            </div>
            <div style="flex: 60%;" class="padding-block">
                <div class="blue-white padding-block h100">
                    <p class="m0">
                        <b>Kvam skriver all musikk selv</b> i Americana sjangeren,
                        men tar også noen vide sprang i retning blues/rock, soul.
                        Stemmen til Linda har vi hørt i en årrekke både som liveartist,
                        men også i samarbeid med flere store artister som Åge Sten
                        Nilsen, Lars Martin Myhre, Frode Alnæs mm. bl.a i show ,
                        på plater og tv. Uforglemmelig er vel hennes versjon av Janis
                        Joplin´s «Me and Bobby McGee» fra programmet Beat for beat.
                    </p>
                </div>
            </div>
        </div>
        <div class="container container-fill-small">
            <iframe
                src="https://www.youtube.com/embed/pWRDaU6jScQ"
                title="Linda Kvam on NRK (Norway): Me and Bobby McGee"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            />
        </div>
    </div>
</main>

<style>
    #kvam-blue {
        background-color: rgb(80, 96, 147);
    }
</style>
