<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen">
  <div class="w-full flex-4 flex flex-col items-center justify-center gap-10">
    {@render children?.()}
  </div>
  <nav class="w-1/2 flex-1 flex items-center justify-center text-xl">
    <div class="flex-1 text-center">
      <a class="hover:font-bold" href="/">home</a>
    </div>
    <div class="flex-1 text-center">
      <a class="hover:font-bold" href="/about">about</a>
    </div>
    <div class="flex-1 text-center">
      <a class="hover:font-bold" href="/nextreading">next reading</a>
    </div>
    <div class="flex-1 text-center">
      <a class="hover:font-bold" href="/pastreadings">past readings</a>
    </div>
  </nav>
</div>
