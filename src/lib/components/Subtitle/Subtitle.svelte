<script lang="ts">
  import type { SubtitleProps } from "./Subtitle";
  let props: SubtitleProps = $props();

  const subtitles: string[] = [
    "A new Pittsburgh literary event—nice!",
    "A beautiful day in the neighborhood.",
    "So nice to see you.",
    "I like you just the way you are.",
    "For everyone!",
    "A bunch of fun, and a bundle too.",
  ];
  const subtitle: string =
    subtitles[Math.floor(Math.random() * subtitles.length)];
</script>

<p class={props.class}>{subtitle}</p>
