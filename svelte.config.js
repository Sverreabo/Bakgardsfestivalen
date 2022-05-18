import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: "404.html"
		}),
		prerender: {
			default: true,
		},
		trailingSlash: "always",
	}
};

export default config;
