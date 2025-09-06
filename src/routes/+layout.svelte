<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div
  class="min-h-full font-[Archivo] flex flex-col items-center justify-center"
>
  <div class="w-full flex-3 flex flex-col items-center justify-center gap-10">
    {@render children?.()}
  </div>
  <nav
    class="w-full font-[Archivo] flex-1 flex gap-6 flex-row items-center justify-center p-5 text-base md:text-xl"
  >
    <div
      class="p-2 flex-1 text-center border border-gray-200 transition hover:bg-gray-200 hover:text-gray-500"
    >
      <a href="/">home</a>
    </div>
    <div
      class="p-2 flex-1 text-center border border-gray-200 transition hover:bg-gray-200 hover:text-gray-500"
    >
      <a href="/about">about</a>
    </div>
    <div
      class="p-2 flex-1 text-center border border-gray-200 transition hover:bg-gray-200 hover:text-gray-500"
    >
      <a href="/nextreading">next reading</a>
    </div>
  </nav>
</div>
