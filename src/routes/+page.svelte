<script lang="ts">
  import Section from "$lib/components/Section/Section.svelte";
  import SectionNav from "$lib/components/SectionNav/SectionNav.svelte";
  import Subtitle from "$lib/components/Subtitle/Subtitle.svelte";

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "next-reading", label: "Next reading" },
  ];
</script>

<Section id="home" class="gap-10">
  <h1 class="font-semibold text-center text-5xl lg:text-8xl">The Readings</h1>
  <Subtitle class="text-xl lg:text-2xl text-center" />
</Section>

<Section id="about">
  <div class="max-w-prose text-xl space-y-6">
    <h2 class="text-2xl font-bold">about</h2>
    <p>
      The Readings are a biannual literary reading series—the Spring and Fall
      Reading.
    </p>
    <p>
      Each Reading presents three to five writers, their work, and a space for
      everyone to commune on art, culture, and life.
    </p>
    <p>
      The Readings are free and informal. Anyone is welcome to read, at any
      skill level, of any form, from any genre. Writers are invited to
      participate at a Reading, it is not an open mic.
    </p>
    <p>The program goes like this:</p>
    <ul class="pl-6 list-disc space-y-3">
      <li>
        The opening party, when people arrive, mingle, meet, munch, talk, and
        laugh.
      </li>
      <li>The reading, when the magic happens.</li>
      <li>
        The closing party, when people inspire, excite, share, connect, and
        know each other better.
      </li>
    </ul>
    <p>We hope to see you soon.</p>
  </div>
</Section>

<Section id="next-reading">
  <div class="text-xl text-center">
    <h2 class="p-4 text-2xl font-bold">stay tuned</h2>
    <p class="p-4">Third Spring Reading announcements coming in 2026</p>
  </div>
</Section>

<SectionNav {sections} />
