<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>The Readings</title>
</svelte:head>

<div
  class="min-h-full font-[Archivo] flex flex-col items-center justify-center"
>
  <div class="w-full flex-3 flex flex-col items-center justify-center gap-10">
    {@render children?.()}
  </div>
  <nav
    class="h-full absolute top-90 left-0 ml-6 mt-6 flex flex-col font-[Archivo] text-base md:text-xl"
  >
    <a
      class="block p-2 flex-0 flex self-stretch transition-[color] text-black hover:text-gray-500"
      href="/"
    >
      home
    </a>
    <a
      class="block p-2 flex-0 flex self-stretch transition-[color] text-black hover:text-gray-500"
      href="/about"
    >
      about
    </a>
    <a
      class="block p-2 flex-0 flex self-stretch transition-[color] text-black hover:text-gray-500"
      href="/nextreading"
    >
      next reading
    </a>
  </nav>
</div>
