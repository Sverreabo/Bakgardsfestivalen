<script>
    import Nav from "$lib/Nav.svelte";
    import NavLink from "$lib/NavLink.svelte";
</script>

<svelte:head>
    <title>Lørdag</title>
</svelte:head>

<main>
    <div class="container">
        <h2>Lørdag</h2>
        <Nav>
            <NavLink href="/program/lørdag/litteratur/#innhold"
                >Litteratur</NavLink
            >
            <NavLink href="/program/lørdag/musikk/#innhold">Musikk</NavLink>
        </Nav>
    </div>
    <slot />
</main>
