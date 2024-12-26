// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options
			out: 'build'      // output directory for the build
			// envPrefix: 'PUBLIC_', // environment variables to pass through
			// precompress: false // whether to compress files (gz, brotli)
		})
	},
	preprocess: vitePreprocess()
};

export default config;
