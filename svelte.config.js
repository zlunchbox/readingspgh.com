import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		// Fully prerendered into build/, served by Cloudflare Workers as static assets (see wrangler.jsonc).
		// The fallback is what Workers serves for unknown paths (not_found_handling: "404-page").
		adapter: adapter({ fallback: '404.html' })
	},
	extensions: ['.svelte', '.svx']
};

export default config;
