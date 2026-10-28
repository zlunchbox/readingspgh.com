<script lang="ts">
  import CircleFigure from "$lib/components/Figure/CircleFigure.svelte";
  import InsetFigure from "$lib/components/Figure/InsetFigure.svelte";
  import Plate from "$lib/components/Plate/Plate.svelte";
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

<Section id="about" class="overflow-hidden portrait:justify-start">
  <Plate
    number={2}
    title="About"
    shape="square"
    side="left"
    caption="fig. 2 — a room"
    fill="bg-catalog"
    inline
  >
    <div class="text-xl space-y-6">
      <p>
        The Readings are a biannual literary reading series—the Spring and
        Fall Reading.
      </p>
      <InsetFigure
        shape="square"
        side="left"
        caption="fig. 2 — a room"
        fill="bg-catalog"
      />
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
  </Plate>
</Section>

<Section id="next-reading" class="overflow-hidden">
  <Plate
    number={3}
    title="Next reading"
    shape="triangle"
    side="right"
    caption="fig. 3 — a moment"
    fill="bg-ink"
    inline
  >
    <p class="font-semibold text-5xl xl:text-6xl leading-[0.95] tracking-tight">
      Fourth Fall Reading
    </p>
    <!-- After the display heading, not before: on narrow phones a word that size can't
         fit beside the slope and would be pushed below the whole triangle -->
    <InsetFigure
      shape="triangle"
      side="right"
      caption="fig. 3 — a moment"
      fill="bg-ink"
    />
    <!-- Plain blocks rather than rules or grid rows, so the lines can follow
         the triangle's slope (rules and grid rows would run under or square
         off around it) -->
    <dl class="mt-8 space-y-6 text-xl">
      <div>
        <dt class="text-xs uppercase tracking-[0.2em]">When</dt>
        <dd class="mt-2">Friday, November&nbsp;20, 2026</dd>
      </div>
      <div>
        <dt class="text-xs uppercase tracking-[0.2em]">Where</dt>
        <dd class="mt-2">20 Love Pl.,<br />Pittsburgh, Pennsylvania</dd>
      </div>
      <div>
        <dt class="text-xs uppercase tracking-[0.2em]">Program</dt>
        <dd class="mt-2">
          <ol class="pl-8 list-[lower-roman] space-y-3">
            <li>
              The opening party
              <span class="block text-base">7p to 8p</span>
            </li>
            <li>
              The reading
              <span class="block text-base">8p to 9p</span>
            </li>
            <li>
              The closing party
              <span class="block text-base">9p to late</span>
            </li>
          </ol>
        </dd>
      </div>
    </dl>
  </Plate>
</Section>

<SectionNav {sections} />
