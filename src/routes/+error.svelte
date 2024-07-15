<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="m-4">
    <h1 class="text-3xl font-bold mb-1">Error</h1>
    <h2>{$page.status}: {$page.error?.message || '(no details)'}</h2>
</main>