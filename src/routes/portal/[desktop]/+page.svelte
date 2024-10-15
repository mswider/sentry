<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/stores";
	import ViewerError from "$lib/components/ViewerError.svelte";
    import { configData, type Desktop } from "$lib/context";
    
    let portalFound = false;

    /**
     * Converts config data into noVNC options
     * @param data
     */
    function encodeParams(data?: Desktop) {
        const obj = new URLSearchParams();

        if (data) {
            const portal = $configData.portals.find((e) => e.id === data.portal);
            if (portal) {
                portalFound = true;

                let path = `${portal.path || '/'}${data.id}`;
                while (path[0] === '/') {   // noVNC adds a leading slash, so we must remove any present
                    path = path.slice(1);   // https://github.com/novnc/noVNC/blob/7fcf9dcfe0cc5b14e3841a4429dc091a6ffca861/app/ui.js#L1042
                }

                obj.append('path', path);
                obj.append('host', portal.hostname);
                obj.append('encrypt', 'true');
                obj.append('port', '443');
            }
        }
        return obj.toString();
    }

    $: ({ desktop: desktopId } = $page.params);
    $: desktop = $configData.desktops.find((e) => e.id === desktopId);
    $: params = encodeParams(desktop);
</script>

{#if desktop}
    {#if portalFound}
        <iframe src="{base}/noVNC/vnc.html#{params}" title="noVNC" class="w-full h-screen"></iframe>
        {:else}
        <ViewerError title="Portal not found!">
            <p><span class="font-mono">"{desktop.portal}"</span> does not match any portal in your config</p>
        </ViewerError>
    {/if}
    {:else}
    <ViewerError title="Desktop not found!">
        <p><span class="font-mono">"{desktopId}"</span> does not match any desktop in your config</p>
    </ViewerError>
{/if}