<script>
	export let href = "";
	import { page } from "$app/stores";
	$: href_is_current = $page.url.pathname === encodeURI(href.split("#")[0]);
</script>

<main>
	<a class:active={href_is_current} class:clickable={href !== ""} {href}>
		<slot />
	</a>
</main>

<style>
	main > a {
		display: block;
	}
</style>
