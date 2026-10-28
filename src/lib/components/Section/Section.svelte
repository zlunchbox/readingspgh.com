<script lang="ts">
  import type { SectionProps } from "./Section";

  const { id, class: className = "", children }: SectionProps = $props();
</script>

<!-- min-h-svh rather than h-svh: sections fill the viewport but grow when their content is taller (e.g. about on a phone) -->
<section
  {id}
  class="min-h-svh w-full flex flex-col items-center justify-center px-6 py-16 {className}"
>
  {@render children()}
</section>
