<!--
  A circle cropped by the right edge only, with its centre on screen and marked
  like a compass point, captioned beneath like a plate in a book. Mostly
  visible and cut by a single edge, it reads as a whole circle continuing off
  the page. The parent section must be `relative overflow-hidden`.
-->
<div class="figure absolute inset-0 pointer-events-none" aria-hidden="true">
  <div class="circle absolute rounded-full bg-cloth"></div>
  <div class="centre absolute size-3">
    <span class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-paper"></span>
    <span class="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-paper"></span>
  </div>
  <p class="caption absolute text-xs italic">fig. 1 — a gathering</p>
</div>

<style>
  /* Centre (--cx, --cy) and radius (--r). Pulling the centre in from the right
     edge by 0.3r leaves about 65% of the circle visible. */
  .figure {
    --r: min(38vw, 28svh);
    --cx: calc(100% - var(--r) * 0.3);
    /* Portrait: sits low, leaving room for the caption beneath */
    --cy: calc(100% - var(--r) - 4rem);
  }

  @media (orientation: landscape) {
    .figure {
      --r: 36svh;
      --cy: 50%;
    }
  }

  .circle {
    left: calc(var(--cx) - var(--r));
    top: calc(var(--cy) - var(--r));
    width: calc(var(--r) * 2);
    height: calc(var(--r) * 2);
  }

  .centre {
    left: var(--cx);
    top: var(--cy);
    transform: translate(-50%, -50%);
  }

  .caption {
    left: calc(var(--cx) - var(--r));
    top: calc(var(--cy) + var(--r) + 0.75rem);
  }
</style>
