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
  children: Snippet;
};
