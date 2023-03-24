<script>
	export let small = false;
</script>

<main>
	<nav class={small ? "small" : ""}>
		<slot />
	</nav>
</main>

<style>
	nav {
		display: flex;
		flex-direction: column;
	}

	main :global(.small a) {
		font-size: 26px;
		padding: 0.1rem;
		min-width: 8.9rem;
	}

	main :global(a) {
		text-align: left;
		background: none;
		border: none;
		font-size: 28px;
		padding: 0.3rem 0.3rem;
		text-decoration: underline;
		color: rgb(255, 255, 255) !important;
	}

	main :global(a:hover),
	main :global(a:focus-visible) {
		background-color: rgb(130, 194, 117);
		cursor: pointer;
	}

	main :global(a.active) {
		font-weight: 600;
		text-decoration: none;
	}

	@media (max-width: 640px) {
		main :global(.small a) {
			font-size: 28px;
			padding: 0.3rem 0.3rem;
		}
	}
</style>
