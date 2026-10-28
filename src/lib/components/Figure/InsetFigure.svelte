<!--
  A figure set into running text for portrait screens: floated to one side and
  bled off that screen edge, 65% visible, centroid marked and captioned
  beneath, so the text wraps around it like a figure in a book. A triangle's
  text follows its slope. Hidden in landscape, where the section's Plate shows
  its figure beside the text instead. The enclosing section must be
  `overflow-hidden`.
-->
<script lang="ts">
  import type { InsetFigureProps } from "./InsetFigure";

  const { shape, side, caption, fill }: InsetFigureProps = $props();
</script>

<div class="inset {side} {shape} landscape:hidden" aria-hidden="true">
  <div class="shape absolute top-0 {fill}"></div>
  <div class="centre absolute size-3">
    <span class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-paper"></span>
    <span class="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-paper"></span>
  </div>
  <p class="caption absolute text-xs italic whitespace-nowrap">{caption}</p>
</div>

<style>
  /* The float is only as wide as the visible part (--vis); the shape's box
     (--s) runs on past the screen edge and is clipped by the section. Kept
     small so the lines beside it stay readable on a phone. */
  .inset {
    --s: min(44vw, 30svh);
    --vis: calc(var(--s) * 0.65);
    --gap: 1.5rem;
    /* Distance from the text's edge to the screen edge on the figure's side */
    --bleed: 1.5rem;

    position: relative;
    width: var(--vis);
    height: calc(var(--s) + 2rem);
    margin-bottom: 1rem;
  }

  .right {
    float: right;
    margin-left: var(--gap);
    margin-right: calc(var(--bleed) * -1);
  }

  /* Tablets: the body also keeps 4rem clear of the fixed arrows on the right */
  @media (min-width: 768px) {
    .right {
      --bleed: 5.5rem;
    }
  }

  .left {
    float: left;
    margin-right: var(--gap);
    margin-left: calc(var(--bleed) * -1);
  }

  /* Shape box (--x is its left edge within the float) and centroid height */
  .right {
    --x: 0px;
  }

  .left {
    --x: calc(var(--vis) - var(--s));
  }

  .square {
    --cy: 0.5;
  }

  .triangle {
    --cy: 0.6667;
    /* Larger: it fills half its box and its slope leaves the upper lines long,
       so it needs the size to carry the section and to fit its caption */
    --s: min(62vw, 42svh);
  }

  .shape {
    left: var(--x);
    width: var(--s);
    height: var(--s);
  }

  .triangle .shape {
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }

  .centre {
    left: calc(var(--x) + var(--s) / 2);
    top: calc(var(--s) * var(--cy));
    transform: translate(-50%, -50%);
  }

  /* Captions hang from the figure's visible inner corner */
  .caption {
    top: calc(var(--s) + 0.75rem);
  }

  .right .caption {
    left: 0;
  }

  .left .caption {
    right: 0;
  }

  /* Text follows the triangle's left slope instead of its bounding box.
     Coordinates are in the float's margin box, which starts --gap to the
     left of the shape; shape-margin keeps the same gap along the slope. */
  .right.triangle {
    shape-outside: polygon(
      calc(var(--gap) + var(--s) / 2) 0,
      100% 0,
      100% 100%,
      0 100%,
      var(--gap) var(--s)
    );
    shape-margin: var(--gap);
  }
</style>
