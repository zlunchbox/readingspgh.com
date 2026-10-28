import type { Snippet } from "svelte";

export type PlateProps = {
  number: number;
  title: string;
  shape: "square" | "triangle";
  /** The edge that crops the figure */
  side: "left" | "right";
  caption: string;
  /** Background class for the figure, e.g. "bg-catalog" */
  fill: string;
  /** Portrait figure sits in the body as an InsetFigure instead of opening the section */
  inline?: boolean;
  children: Snippet;
};
