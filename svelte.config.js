import adapter from '@sveltejs/adapter-auto';
import adapterNode from '@sveltejs/adapter-node';
import adapterVercel from '@sveltejs/adapter-vercel';
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
} else if (process.env.ADAPTER === 'vercel') {
	config.kit.adapter = adapterVercel();
} else {
	config.kit.adapter = adapter();
}

export default config;
