<script>
    import "$lib/program.css";
</script>

<svelte:head>
    <title>Litteratur på fredag</title>
</svelte:head>

<main class="container">
    <div class="program">
        <h3>15:00</h3>
        <ul>
            <li>
                <figure>
                    <div
                        class="flex flex-children-grow"
                        style="align-items:flex-end;"
                    >
                        <div>
                            <img
                                width="300"
                                height="475"
                                alt="Omslag til Erichsens 'Sommerland'"
                                src="/Sommerland_Erichsen.jpg"
                            />
                        </div>
                        <div style="margin-left: 0.5rem;">
                            <img
                                width="580"
                                height="900"
                                alt="Omslag til Kjølners 'Sommer i Sandøsund"
                                src="/Kjølner_Sommer i Sandoesund.webp"
                            />
                        </div>
                    </div>
                    <figcaption />
                </figure>
                <p>
                    <i>Skjærgård, sommer og proseccokrim</i>.
                    <a href="info/#Dorthe-Erichsen">Dorthe Erichsen</a>
                    og
                    <a href="info/#Lene-Lauritzen-Kjølner"
                        >Lene Lauritzen Kjølner</a
                    > i samtale med Audhild Lønne.
                </p>
            </li>
        </ul>

        <h3>16:00</h3>
        <ul>
            <li>
                <img
                    src="/Kvinnelinjer.jpg"
                    class="p50"
                    alt="Omslaget til 'Kvinnelinjer'"
                    width="670"
                    height="945"
                />
                <p>
                    <a href="info/#Kvinnelinjer">Kvinnelinjer</a>. Kvinners
                    livsfortellinger. (Foreningen KULT v/ Norunn Askeland og
                    Lisbeth Thoresen)
                </p>
            </li>
        </ul>

        <h3>17:00</h3>
        <ul>
            <li>
                <p>Tre bibliotekarer anbefaler tre bøker hver.</p>
            </li>
        </ul>

        <h3>18:00</h3>
        <ul>
            <li>
                <p>
                    <i>Med blikk for naturen</i> Forfatterne
                    <a href="info/#Anne-Sverdrup-Thygeson"
                        >Anne Sverdrup-Thygeson</a
                    >
                    og
                    <a href="info/#Lars-Elling">Lars Elling</a> i samtale med
                    Stein Erik Lunde om bøkene <i>Insekter i Norge</i> og
                    <i>Fyrstene av Finntjern</i>
                </p>
            </li>
        </ul>

        <h3>19:00</h3>
        <ul>
            <li>
                <img
                    class="p50"
                    width="775"
                    height="1200"
                    alt="Eriksens 'Syv meninger med livet'"
                    src="/Eriksen Syv meninger med livet.jpg"
                />
                <p>
                    <i>Syv meninger med livet</i>. Forfatter
                    <a href="info/#Thomas-Hylland-Eriksen"
                        >Thomas Hylland Eriksen</a
                    > i samtale med Rune Nilsen.
                </p>
            </li>
        </ul>
    </div>
</main>
