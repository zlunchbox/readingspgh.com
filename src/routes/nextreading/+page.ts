import { redirect } from "@sveltejs/kit";

// The old /nextreading page is now a section of the home page
export function load() {
  redirect(308, "/#next-reading");
}
