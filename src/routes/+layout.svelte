<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<!-- Plain files in static/ rather than an imported asset: Vite inlines small
     imports as data: URIs, which Safari ignores, falling back to /favicon.ico -->
<svelte:head>
  <link rel="icon" href="/favicon.ico" sizes="32x32" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

<main class="font-[Archivo]">
  {@render children?.()}
</main>
