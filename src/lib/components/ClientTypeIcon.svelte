<script lang="ts">
    import type { ClientType } from "lib/config";
    import { Server, Laptop, Computer } from "lucide-svelte";
    
    export let client: ClientType;

    const icons = {
        'server': Server,
        'laptop': Laptop,
        'desktop': Computer
    };

    $: icon = icons[client];
</script>

<svelte:component this={icon} />