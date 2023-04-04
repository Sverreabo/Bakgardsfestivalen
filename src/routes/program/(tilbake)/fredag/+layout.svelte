<script>
    import Nav from "$lib/Nav.svelte";
    import NavLink from "$lib/NavLink.svelte";
</script>

<svelte:head>
    <title>Fredag</title>
</svelte:head>

<main>
    <div class="container">
        <h2>Fredag</h2>
        <Nav>
            <NavLink href="/program/fredag/litteratur/#innhold"
                >Litteratur</NavLink
            >
            <NavLink href="/program/fredag/musikk/#innhold">Musikk</NavLink>
        </Nav>
    </div>
    <slot />
</main>
