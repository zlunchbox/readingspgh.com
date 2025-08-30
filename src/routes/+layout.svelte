<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen">
  <div class="w-full flex-4 flex">
    {@render children?.()}
  </div>
  <div class="w-full flex-1 flex items-center justify-center">test</div>
</div>
