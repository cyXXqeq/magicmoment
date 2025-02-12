import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
const forGithubPages = false;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(
			{
				fallback: 'index.html',
				pages: 'build',
				assets: 'build',
				precompress: true,
				strict: true
			}
		),
		paths: {
			base: forGithubPages ? '/magicmoment' : ''
		},
	}

};

export default config;
