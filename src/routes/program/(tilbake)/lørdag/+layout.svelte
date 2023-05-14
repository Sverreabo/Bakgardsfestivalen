<script>
    import Nav from "$lib/Nav.svelte";
    import NavLink from "$lib/NavLink.svelte";
</script>

<main>
    <div class="container">
        <h2>Lørdag 10. juni</h2>
        <Nav>
            <NavLink href="/program/lørdag/litteratur/#innhold"
                >Litteratur</NavLink
            >
            <NavLink href="/program/lørdag/musikk/#innhold">Musikk</NavLink>
        </Nav>
    </div>
    <slot />
</main>
