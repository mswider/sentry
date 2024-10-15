<script lang="ts">
	import { CircleAlert } from "lucide-svelte";

    export let title: string;
</script>

<div class="hero min-h-80">
    <div class="hero-content text-center flex-col gap-4">
        <div class="flex items-center gap-4">
            <CircleAlert size={48} color="oklch(var(--er))" class="shrink-0" />
            <h1 class="text-4xl font-bold">{title}</h1>
        </div>
        <slot></slot>
    </div>
</div>