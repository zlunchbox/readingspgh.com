<script lang="ts">
  import { fade } from "svelte/transition";
  import type { SectionNavProps } from "./SectionNav";

  const { sections }: SectionNavProps = $props();

  let current = $state(0);
  const previous = $derived(sections[current - 1]);
  const next = $derived(sections[current + 1]);

  $effect(() => {
    // A zero-height band across the middle of the viewport: whichever section
    // crosses it is the current one, regardless of how tall that section is.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            current = sections.findIndex((s) => s.id === entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  });

  const arrowClass =
    "size-11 flex items-center justify-center border border-gray-200 bg-white/80 backdrop-blur-sm transition hover:bg-gray-200 hover:text-gray-500";
</script>

<!-- Phones: a passive position indicator that fits in the page gutter, so text stays centered -->
<div
  class="md:hidden fixed right-2 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2"
  aria-hidden="true"
>
  {#each sections as section, i (section.id)}
    <span
      class="w-1.5 rounded-full transition-all duration-300 {i === current
        ? 'h-5 bg-black'
        : 'h-1.5 bg-gray-300'}"
    ></span>
  {/each}
</div>

<!-- Wider screens: arrows. Fixed slots keep each arrow in the same spot whether or not the other is shown -->
<nav
  class="hidden md:flex fixed bottom-4 right-4 z-20 flex-col gap-2"
  aria-label="Sections"
>
  <div class="size-11">
    {#if previous}
      <a
        class={arrowClass}
        href="#{previous.id}"
        aria-label="Previous: {previous.label}"
        transition:fade={{ duration: 150 }}
      >
        <svg class="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="M10 16V4M4 10l6-6 6 6" />
        </svg>
      </a>
    {/if}
  </div>
  <div class="size-11">
    {#if next}
      <a
        class={arrowClass}
        href="#{next.id}"
        aria-label="Next: {next.label}"
        transition:fade={{ duration: 150 }}
      >
        <svg class="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="M10 4v12M4 10l6 6 6-6" />
        </svg>
      </a>
    {/if}
  </div>
</nav>
