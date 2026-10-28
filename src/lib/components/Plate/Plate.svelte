<!--
  A section's figure, catalogue header and body, laid out like a plate.

  The figure is cropped by one edge with 65% visible, its centroid marked and a
  caption beneath. In portrait it opens the section, with the header stacked
  beside it and the header's rule level with the figure's bottom edge, like a
  shelf. In landscape the figure is pinned to its side, vertically centred,
  and the header and body sit beside it.

  With `inline`, the portrait figure is left to the body (an InsetFigure the
  text wraps around), and the header is a plain catalogue row in both
  orientations.

  Renders straight into an `overflow-hidden` Section. The portrait opener also
  needs `portrait:justify-start` and assumes the Section's 4rem top padding.
-->
<script lang="ts">
  import type { PlateProps } from "./Plate";

  const {
    number,
    title,
    shape,
    side,
    caption,
    fill,
    inline = false,
    children,
  }: PlateProps = $props();
</script>

<div
  class="figure {side} {shape} pointer-events-none {inline
    ? 'portrait:hidden'
    : ''}"
  aria-hidden="true"
>
  <div class="shape absolute {fill}"></div>
  <div class="centre absolute size-3">
    <span class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-paper"></span>
    <span class="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-paper"></span>
  </div>
  <p class="caption absolute text-xs italic whitespace-nowrap">{caption}</p>
</div>

<!-- Wherever the fixed arrows show, keep the text clear of them: the whole column in
     landscape, only the body in portrait so the header still reaches a right-hand figure -->
<div
  class="column {side} relative w-full md:landscape:pr-16"
  class:opener={!inline}
>
  <div class="landscape:max-w-[45rem]">
    <div class="header text-xs uppercase tracking-[0.2em]">
      <span>No. {number}</span>
      <h2>{title}</h2>
    </div>
    <div
      class="md:portrait:pr-16 {inline ? 'mt-8' : 'mt-12 landscape:mt-8'}"
    >
      {@render children()}
    </div>
  </div>
</div>

<style>
  /* Side of the figure's box (--s) and how much of it is visible (--vis).
     The box matches the square in "about"; a triangle fills half of it. */
  .figure,
  .column {
    --s: min(61vw, 45svh);
    --vis: calc(var(--s) * 0.65);
  }

  @media (orientation: landscape) {
    .figure,
    .column {
      --s: 58svh;
    }
  }

  /* Box position (--x, --y) and the centroid's height as a share of the box (--cy) */
  .figure {
    position: absolute;
    inset: 0;
    --y: 4rem;
  }

  @media (orientation: landscape) {
    .figure {
      --y: calc(50% - var(--s) / 2);
    }
  }

  .figure.left {
    --x: calc(var(--vis) - var(--s));
  }

  .figure.right {
    --x: calc(100% - var(--vis));
  }

  .figure.square {
    --cy: 0.5;
  }

  .figure.triangle {
    --cy: 0.6667;
  }

  .shape {
    left: var(--x);
    top: var(--y);
    width: var(--s);
    height: var(--s);
  }

  .triangle .shape {
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }

  .centre {
    left: calc(var(--x) + var(--s) / 2);
    top: calc(var(--y) + var(--s) * var(--cy));
    transform: translate(-50%, -50%);
  }

  .caption {
    top: calc(var(--y) + var(--s) + 0.75rem);
  }

  /* Captions hang from the figure's visible inner corner */
  .left .caption {
    left: calc(var(--x) + var(--s));
    transform: translateX(-100%);
  }

  .right .caption {
    left: var(--x);
  }

  /* Right-hand figures leave the text where home's title sits */
  .column.right {
    max-width: 72rem;
  }

  @media (orientation: landscape) {
    .column.left {
      padding-left: calc(var(--vis) + 3rem);
    }

    .column.right {
      padding-right: calc(var(--vis) + 3rem);
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid black;
  }

  /* Portrait opener: stacked beside the figure, as tall as it, so the rule is
     level with the figure's bottom edge. The column starts 1.5rem in from the
     screen edge, so a margin of --vis leaves the same 1.5rem gutter beside the
     figure. */
  @media (orientation: portrait) {
    .opener .header {
      flex-direction: column;
      justify-content: flex-end;
      gap: 0.5rem;
      min-height: var(--s);
    }

    .opener.left .header {
      margin-left: var(--vis);
    }

    .opener.right .header {
      margin-right: var(--vis);
    }
  }
</style>
