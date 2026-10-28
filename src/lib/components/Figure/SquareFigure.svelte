<!--
  A square cropped by the left edge only, mirroring the circle: centre on
  screen and marked, caption beneath, right-aligned to the square's edge.
  In portrait it sits in the flow below the section's text, since that text
  runs longer than a screen; in landscape it's pinned behind the section's
  left side. The parent section must be `relative overflow-hidden`.
-->
<div class="figure pointer-events-none" aria-hidden="true">
  <div class="square absolute bg-catalog"></div>
  <div class="centre absolute size-3">
    <span class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-paper"></span>
    <span class="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-paper"></span>
  </div>
  <p class="caption absolute text-xs italic whitespace-nowrap">fig. 2 — a room</p>
</div>

<style>
  /* Side (--s) and top-left corner (--x, --y). The side is 1.6× the circle's
     radius, so the square carries a little less weight than the circle (a
     2r square has 27% more area). Pushing it off the left edge by 0.35s
     leaves 65% visible, matching the circle. */
  .figure {
    --s: min(61vw, 45svh);
    --x: calc(var(--s) * -0.35);
    --y: 0px;

    /* Portrait: a full-bleed block in the flow, tall enough for square and caption */
    position: relative;
    align-self: stretch;
    margin: 4rem -1.5rem 0;
    height: calc(var(--s) + 2rem);
  }

  @media (orientation: landscape) {
    .figure {
      --s: 58svh;
      --y: calc(50% - var(--s) / 2);

      position: absolute;
      inset: 0;
      margin: 0;
      height: auto;
    }
  }

  .square {
    left: var(--x);
    top: var(--y);
    width: var(--s);
    height: var(--s);
  }

  .centre {
    left: calc(var(--x) + var(--s) / 2);
    top: calc(var(--y) + var(--s) / 2);
    transform: translate(-50%, -50%);
  }

  .caption {
    left: calc(var(--x) + var(--s));
    top: calc(var(--y) + var(--s) + 0.75rem);
    transform: translateX(-100%);
  }
</style>
