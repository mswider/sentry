<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import { configData, type Desktop } from "$lib/context";
    import { CircleAlert } from "lucide-svelte";
    
    function encodeParams(data?: Desktop) {
        const obj = new URLSearchParams();

        if (data) {
            let path = `${base}/sockets/${data.id}`;
            while (path[0] === '/') {   // noVNC adds a leading slash, so we must remove any present
                path = path.slice(1);   // https://github.com/novnc/noVNC/blob/7fcf9dcfe0cc5b14e3841a4429dc091a6ffca861/app/ui.js#L1042
            }

            obj.append('path', path);
            obj.append('encrypt', 'true');
            obj.append('port', '443');
        }
        return obj.toString();
    }

    $: ({ desktop: desktopId } = $page.params);
    $: desktop = $configData.desktops.find((e) => e.id === desktopId)
    $: params = encodeParams(desktop);
</script>

{#if desktop}
    <iframe src="{base}/noVNC/vnc.html#{params}" title="noVNC" class="w-full h-screen"></iframe>
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