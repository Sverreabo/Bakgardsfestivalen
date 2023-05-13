<script>
    import Nav from "$lib/Nav.svelte";
    import NavLink from "$lib/NavLink.svelte";
</script>

<main>
    <div class="container">
        <h2>Fredag 09. juni</h2>
        <Nav>
            <NavLink href="/program/fredag/litteratur/#innhold"
                >Litteratur</NavLink
            >
            <NavLink href="/program/fredag/musikk/#innhold">Musikk</NavLink>
        </Nav>
    </div>
    <slot />
</main>
