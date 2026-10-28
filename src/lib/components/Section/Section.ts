import type { Snippet } from "svelte";

export type SectionProps = {
  id: string;
  class?: string;
  children: Snippet;
};
