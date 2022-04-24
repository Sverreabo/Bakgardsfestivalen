<main>
	<nav>
		<button href="Om festivalen">Om festivalen</button>

		<button>Program</button>

		<button>Kjøp billetter</button>

		<button>Kontakt</button>
	</nav>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
	}

	nav {
		display: flex;
		flex-direction: column;
	}

	button {
		text-align: left;
		background: none;
		border: none;
		font-size: 20px;
		color: rgb(255, 255, 255);
	}

	button:hover,
	button:focus-visible {
		background-color: rgb(130, 194, 117);
	}
</style>
