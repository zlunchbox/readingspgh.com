<script lang="ts">
  import type { BannerInfo } from "./BannerInfo";
  const { bannerTitle, bannerSubtitle, bannerLink }: BannerInfo = $props();
</script>

<h2 class="text-sm lg:text-xl text-center flex-0">
  {bannerTitle}
  {#if bannerSubtitle}
    <a
      class="block text-center text-base lg:text-2xl transition hover:text-gray-500"
      href={bannerLink}
    >
      {bannerSubtitle}
    </a>
  {/if}
</h2>
