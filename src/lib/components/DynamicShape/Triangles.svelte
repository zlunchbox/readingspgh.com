<!-- DynamicShapes.svelte -->
<script lang="ts">
  import Triangle from "./Triangle.svelte";
</script>

<div class="relative bottom-150 right-0">
  <!-- Shape 1 - Bottom layer -->
  <Triangle class="absolute left-25 -bottom-25 z-1" rotate={true} />
  <Triangle class="absolute left-50 z-2" />
  <Triangle class="absolute z-3" />
</div>
