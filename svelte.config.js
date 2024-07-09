import * as child_process from 'node:child_process';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ fallback: 'index.html', precompress: false }),
		version: {
			name: child_process.execSync('git describe --tags --abbrev=0').toString().trim()
		}
	}
};

export default config;
