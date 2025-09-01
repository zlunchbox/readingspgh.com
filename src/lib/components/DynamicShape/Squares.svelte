<!-- DynamicShapes.svelte -->
<script lang="ts">
  import Square from "./Square.svelte";
</script>

<div class="relative bottom-45 right-74">
  <!-- Shape 1 - Bottom layer -->
  <Square class="absolute left-26 z-1" />
  <Square class="absolute left-52 z-2" />
  <Square class="absolute z-3" />
</div>
