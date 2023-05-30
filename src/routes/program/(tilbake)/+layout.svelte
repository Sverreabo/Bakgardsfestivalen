<script>
    import Tilbake from "$lib/Tilbake.svelte";
</script>

<main>
    <Tilbake
        ignorer={["/program/torsdag/", "/program/fredag/", "/program/lørdag/"]}
    />
    <slot />
</main>
