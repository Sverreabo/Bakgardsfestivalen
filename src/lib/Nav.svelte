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

	main :global(.small a:not(.clickable)) {
		text-decoration: none;
	}

	main :global(a) {
		text-align: left;
		background: none;
		border: none;
		font-size: 28px;
		padding: 0.3rem 0.3rem;
		color: rgb(255, 255, 255) !important;
		cursor: default;
	}

	main :global(.small a) {
		padding: 0.2rem 0.2rem;
	}

	main :global(a.clickable:hover),
	main :global(a.clickabe:focus-visible) {
		background-color: rgb(130, 194, 117);
		cursor: pointer;
	}

	main :global(a.active) {
		font-weight: 600;
		text-decoration: none;
	}

	@media (min-width: 641px) {
		main :global(.small a) {
			font-size: 24px;
			padding: 0 0.05rem;
			min-width: 8.9rem;
			max-width: 8.9rem;
		}
	}
</style>
