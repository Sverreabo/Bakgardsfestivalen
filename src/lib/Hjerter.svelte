<script>
    export let antall = 3;
</script>

<main>
    <div class="container">
        <div id="bilder" class="flex flex-center flex-children-grow">
            {#each Array(antall) as _, i}
                <img src="/favicon.png" width="128" height="128" alt="" />
            {/each}
        </div>
    </div>
</main>

<style>
    #bilder {
        margin: 2rem auto;
        width: 6%;
    }
</style>
