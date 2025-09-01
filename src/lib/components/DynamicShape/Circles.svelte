<!-- DynamicShapes.svelte -->
<script lang="ts">
  import Circle from "./Circle.svelte";
</script>

<div class="relative bottom-75 -right-40">
  <!-- Shape 1 - Bottom layer -->
  <Circle class="absolute top-37 z-1" />
  <Circle class="absolute top-74 z-2" />
  <Circle class="absolute z-3" />
</div>
