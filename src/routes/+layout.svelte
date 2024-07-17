<script lang='ts'>
	import type { LayoutData } from "./$types";
	import type { Action } from "svelte/action";
    import "../app.css"
	import {version as appVersion} from '$app/environment'
    import logo from "$lib/assets/logo.svg"
	import { base } from "$app/paths";
	import { configData } from "$lib/context";

	console.info(`Sentry ${appVersion}
https://github.com/mswider/sentry`)

	export let data: LayoutData;

	const focus: Action<HTMLDialogElement> = (node) => {
		if (data.status !== 200) {
			node.showModal();
		}
	};

	if (data.status === 200) {
		const config = data.data.config;
		configData.set(config);
		console.log({config});
	} else {
		console.warn('error loading layout:', data);
	}
</script>

<nav class="navbar bg-base-300 shadow-lg">
    <div class="flex-none gap-x-4">
		<a class="btn btn-ghost" href="{base}/">
			<img src="{logo}" alt="logo" class="dark:invert">
			<h1 class="text-3xl font-bold">Sentry</h1>
		</a>
		{#if appVersion}
			<div class="badge badge-accent badge-md font-mono">{appVersion}</div>
		{/if}
    </div>
</nav>

{#if data.status === 200}
	<slot>
	</slot>
{/if}

<dialog class="modal modal-bottom sm:modal-middle" use:focus>
	<div class="modal-box">
		<h3 class="text-lg font-bold">Something went wrong</h3>
		<p class="py-4">{'message' in data.data && data.data.message}{#if data.status === 500}&nbsp;(network error){/if}</p>
		<div class="modal-action">
			<button class="btn btn-neutral" on:click={() => window.location.reload()}>Reload</button>
		</div>
	</div>
</dialog>