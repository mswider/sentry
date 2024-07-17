<script lang="ts">
    import { configData } from "$lib/context";
    import ClientTypeIcon from "$lib/components/ClientTypeIcon.svelte";
</script>

<main class="my-4 mx-8">
    <h2 class="text-2xl font-bold">Desktops</h2>
    <div class="py-4 flex flex-row flex-wrap gap-6">
        {#each $configData.desktops as desktop (desktop.websocketPath)}
            <div class="card dark:border-inherit bg-base-200 w-full sm:w-96 btn h-full items-start">
                <div class="card-body flex flex-row gap-3">
                    {#if desktop.clientType}
                        <ClientTypeIcon client={desktop.clientType} />
                    {/if}
                    <h2 class="card-title">{desktop.displayName}</h2>
                </div>
            </div>
        {/each}
    </div>
</main>