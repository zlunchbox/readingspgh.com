import { redirect } from "@sveltejs/kit";

// The old /about page is now a section of the home page
export function load() {
  redirect(308, "/#about");
}
