<script>
    export let bilder = [];

    let bildeIndex = 0;

    function forrige() {
        bildeIndex--;
    }
    function neste() {
        bildeIndex++;
    }
</script>

<main>
    <div id="hoved" class="relative">
        <div id="galleri" style="left: {(bildeIndex % bilder.length) * 50}%">
            {#each bilder as bilde, i}
                <div class="relative">
                    <div class="over-img text-over-img">
                        <p>{bilde.text}</p>
                    </div>
                    <div>
                        <img
                            src={bilde.src}
                            width={bilde.w}
                            height={bilde.h}
                            alt=""
                        />
                    </div>
                </div>
            {/each}
        </div>
        <div id="over">
            <button id="forrige" on:click={neste}> &lt; </button>
            <button id="neste" on:click={forrige}> &gt; </button>
        </div>
    </div>
</main>

<style>
    main {
        overflow-x: hidden;
    }

    #galleri {
        position: relative;
        display: flex;
        transition: left 0.5s;
    }
    #galleri > div {
        flex: 0 0 50%;
    }

    #over {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        font-size: 2rem;
        opacity: 0.7;
        transition: opacity 0.3s;
    }
    button:hover {
        opacity: 1;
    }

    .text-over-img {
        color: black;
        background-color: #ccc;
    }

    .text-over-img > p {
        margin: 0.1rem 0.5rem;
    }
</style>
