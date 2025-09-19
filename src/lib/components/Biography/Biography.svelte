<script lang="ts">
  import type { BiographyProps } from "./types/Biography";

  const { children, name }: BiographyProps = $props();
</script>

<div class="md:w-1/2">
  <h1 class="text-xl lg:text-2xl pb-5 bold">{name}</h1>
  <div class="text-lg">
    {@render children()}
  </div>
</div>
