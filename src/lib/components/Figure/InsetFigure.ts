export type InsetFigureProps = {
  shape: "square" | "triangle";
  /** The screen edge the figure bleeds off; text wraps on the other side */
  side: "left" | "right";
  caption: string;
  /** Background class for the figure, e.g. "bg-catalog" */
  fill: string;
};
