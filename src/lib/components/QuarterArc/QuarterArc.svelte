<!-- QuarterArc.svelte -->
<script lang="ts">
  let { position = "top-left", size = 100 } = $props();

  // Path configurations for different positions
  const paths: { [key: string]: string } = {
    "top-right": `M ${100 - size + 20} 0 A ${size} ${size} 0 0 1 100 ${size - 20} L 100 0 Z`,
    "top-left": `M 0 ${size - 20} A ${size} ${size} 0 0 1 ${size - 20} 0 L 0 0 Z`,
    "bottom-right": `M 100 ${100 - size + 20} A ${size} ${size} 0 0 1 ${100 - size + 20} 100 L 100 100 Z`,
    "bottom-left": `M 0 ${100 - size + 20} A ${size} ${size} 0 0 1 ${size - 20} 100 L 0 100 Z`,
  };

  let pathData = $derived(paths[position]);
</script>

<svg
  class="absolute inset-x-50 h-full pointer-events-none"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <path
    d="M 0 100 A 100 100 0 0 1 100 0"
    fill="none"
    stroke="crimson"
    stroke-width="5"
  />
</svg>
