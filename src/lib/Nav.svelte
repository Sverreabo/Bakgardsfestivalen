<script>
	export let small = false;
</script>

<main>
	<nav class:small>
		<slot />
	</nav>
</main>

<style>
	nav {
		display: flex;
		flex-direction: column;
	}

	main :global(:not(.small) a) {
		font-size: 28px;
		padding: 0.3rem 0.3rem;
	}

	main :global(a) {
		text-align: left;
		background: none;
		border: none;
		font-size: 24px;
		padding: 0 0.05rem;
		text-decoration: none !important;
		color: rgb(255, 255, 255) !important;
	}

	main :global(a:hover),
	main :global(a:focus-visible) {
		background-color: rgb(130, 194, 117);
		cursor: pointer;
		text-decoration: none;
	}

	main :global(a.active) {
		font-weight: 600;
	}

	@media (max-width: 640px) {
		main :global(.small a) {
			font-size: 28px;
			padding: 0.2rem 0.2rem;
		}
	}
</style>
