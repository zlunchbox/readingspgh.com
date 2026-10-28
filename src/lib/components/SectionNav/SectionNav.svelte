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

<!-- Phones: a passive position indicator in the left gutter, so text stays centered
     and it stays clear of the native scrollbar on the right -->
<div
  class="md:hidden fixed left-2 top-4 z-20 flex flex-col gap-1.5"
  aria-hidden="true"
>
  {#each sections as section, i (section.id)}
    <span
      class="size-1.5 transition-colors duration-300 {i === current
        ? 'bg-black'
        : 'bg-gray-300'}"
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
