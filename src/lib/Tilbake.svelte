<script>
    export let ignorer = [];
    import { page } from "$app/stores";

    function hent_tilbake(url) {
        url = decodeURI(url.split("#")[0]);
        let ny_url =
            url.substring(0, url.lastIndexOf("/", url.length - 2)) + "/";
        if (ignorer.includes(ny_url)) {
            return hent_tilbake(ny_url);
        } else {
            return ny_url + "#innhold";
        }
    }
</script>

<div class="container tilbake">
    <a href={hent_tilbake($page.url.pathname)}>&#8249; Tilbake</a>
</div>
