<script lang="ts">
    import { page } from "$app/stores";
    import { configData } from "$lib/context";
    import { CircleAlert } from "lucide-svelte";
    
    $: ({ desktop: desktopId } = $page.params);
    $: desktop = $configData.desktops.find((e) => e.id === desktopId)
</script>

{#if desktop}
    <h1>Name: {desktop.displayName}</h1>
    {:else}
    <div class="hero min-h-80">
        <div class="hero-content text-center flex-col gap-4">
            <div class="flex items-center gap-4">
                <CircleAlert size={48} color="oklch(var(--er))" class="shrink-0" />
                <h1 class="text-4xl font-bold">Portal not found!</h1>
            </div>
            <p><span class="font-mono">"{desktopId}"</span> does not match any desktop in your config.</p>
        </div>
    </div>
{/if}