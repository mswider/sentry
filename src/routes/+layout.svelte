<script lang='ts'>
	import type { LayoutData } from "./$types";
    import "../app.css"
	import {version as appVersion} from '$app/environment'
    import logo from "$lib/assets/screen-share.svg"
	import { base } from "$app/paths";

	console.info(`Sentry ${appVersion}
https://github.com/mswider/sentry`)

    function handleMediaQuery() {
		document.body.parentElement!.dataset.theme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'forest'
			: 'nord';
	}

	if (window.matchMedia) {
		handleMediaQuery();
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', handleMediaQuery);
	}

	export let data: LayoutData;
	if (data.status === 200) {
		const config = data.data.config;
		console.log({config});
	} else {
		console.warn('error loading layout:', data);
	}
</script>

<nav class="navbar bg-base-300">
    <div class="flex-none gap-x-4">
		<a class="btn btn-ghost" href="{base}/">
			<img src="{logo}" alt="logo" class="dark:invert">
			<h1 class="text-3xl font-bold">Sentry</h1>
		</a>
		{#if appVersion}
			<div class="badge badge-accent badge-md">{appVersion}</div>
		{/if}
    </div>
</nav>
<slot>
</slot>