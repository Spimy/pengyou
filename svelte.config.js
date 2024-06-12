import adapter from '@sveltejs/adapter-auto';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {}
};

if (process.env.ADAPTER === 'node') {
	config.kit.adapter = adapterNode();
} else {
	config.kit.adapter = adapter();
}

export default config;
