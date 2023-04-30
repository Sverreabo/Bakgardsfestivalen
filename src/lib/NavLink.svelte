<script>
	export let href = "";
	import { page } from "$app/stores";
	function matches_url(url, to_match) {
		return url.substring(0, to_match.length) === to_match;
	}
	$: href_is_current = matches_url(
		$page.url.pathname,
		encodeURI(href).split("#")[0]
	);
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
