<script lang="ts">
  import CircleFigure from "$lib/components/Figure/CircleFigure.svelte";
  import SquareFigure from "$lib/components/Figure/SquareFigure.svelte";
  import Section from "$lib/components/Section/Section.svelte";
  import SectionNav from "$lib/components/SectionNav/SectionNav.svelte";
  import Subtitle from "$lib/components/Subtitle/Subtitle.svelte";

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "next-reading", label: "Next reading" },
  ];
</script>

<Section id="home" class="overflow-hidden">
  <CircleFigure />
  <!-- Portrait: text at the top, figure below. Landscape: text left, figure right. -->
  <div class="relative w-full max-w-6xl portrait:mb-auto">
    <!-- w-fit keeps the rule to the title's width, clear of the figure -->
    <div class="w-fit">
      <p
        class="flex justify-between border-b border-black pb-3 text-xs uppercase tracking-[0.2em]"
      >
        <span>No. 1</span>
        <span>Pittsburgh</span>
      </p>
      <h1
        class="mt-8 font-semibold text-6xl xl:text-8xl leading-[0.95] tracking-tight"
      >
        The Readings
      </h1>
      <!-- contain: the subtitle wraps at the title's width instead of widening the column.
           On phones the title wraps and fills the width, so cap it near the width of "Readings". -->
      <Subtitle class="mt-6 text-xl lg:text-2xl [contain:inline-size] max-sm:max-w-[13em] text-balance" />
    </div>
  </div>
</Section>

<Section id="about" class="overflow-hidden">
  <!-- Landscape: clear the square's visible 65% (0.65 × 58svh ≈ 38svh) plus a gap.
       Wherever the fixed arrows show, keep the text clear of them. -->
  <div class="relative w-full landscape:pl-[calc(38svh+3rem)] md:pr-16">
    <div class="max-w-prose text-xl space-y-6">
      <div
        class="flex justify-between border-b border-black pb-3 text-xs uppercase tracking-[0.2em]"
      >
        <span>No. 2</span>
        <h2>About</h2>
      </div>
      <p class="pt-2">
        The Readings are a biannual literary reading series—the Spring and
        Fall Reading.
      </p>
      <p>
        Each Reading presents three to five writers, their work, and a space
        for everyone to commune on art, culture, and life.
      </p>
      <p>
        The Readings are free and informal. Anyone is welcome to read, at any
        skill level, of any form, from any genre. Writers are invited to
        participate at a Reading, it is not an open mic.
      </p>
      <p>The program goes like this:</p>
      <ol class="pl-8 list-[lower-roman] space-y-3">
        <li>
          The opening party, when people arrive, mingle, meet, munch, talk,
          and laugh.
        </li>
        <li>The reading, when the magic happens.</li>
        <li>
          The closing party, when people inspire, excite, share, connect, and
          know each other better.
        </li>
      </ol>
      <p>We hope to see you soon.</p>
    </div>
  </div>
  <!-- After the text so it closes the section on phones; landscape pins it left regardless -->
  <SquareFigure />
</Section>

<Section id="next-reading">
  <div class="text-xl text-center">
    <h2 class="p-4 text-2xl font-bold">stay tuned</h2>
    <p class="p-4">Third Spring Reading announcements coming in 2026</p>
  </div>
</Section>

<SectionNav {sections} />
