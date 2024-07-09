<script lang='ts'>
    import "../app.css"
	import {version as appVersion} from '$app/environment'
    import logo from "../lib/assets/screen-share.svg"

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
</script>

<nav class="navbar bg-base-300">
    <div class="flex-none gap-x-4">
        <img src="{logo}" alt="logo" class="dark:invert">
        <h1 class="text-3xl font-bold">Sentry</h1>
		{#if appVersion}
			<div class="badge badge-accent badge-md">{appVersion}</div>
		{/if}
    </div>
</nav>
<slot></slot>