# readingspgh.com
## overview

Homepage of the Readings, a Pittsburgh-based reading series created by Roman Benty, Wesley Eckstein, and Zachary Luettgen.

## stack & dependencies

This is a SvelteKit app leveraging TailwindCSS.
It's fully prerendered with `adapter-static` and served from Cloudflare Workers as static assets, with no Worker script (see `wrangler.jsonc`). Old URLs are redirected by `static/_redirects`.

Bun is the package manager and script runner. Wrangler is the exception: it runs on Node.js 22, because under Bun it can't forward requests to the Worker (Bun's `fetch()` ignores the undici `dispatcher` that Miniflare relies on; see [oven-sh/bun#39247](https://github.com/oven-sh/bun/issues/39247)). Node is installed keg-only with `brew install node@22`, so it isn't on the PATH; the `wrangler` script puts `/opt/homebrew/opt/node@22/bin` first for Wrangler alone.

## commands

- `bun install` installs dependencies.
- `bun run dev` starts the Vite dev server.
- `bun run check` type-checks; `bun run lint` lints.
- `bun run preview` builds and serves the site locally with Wrangler, as Cloudflare will (redirects and the 404 page included).
- `bun run deploy` builds and deploys to Cloudflare. It needs a one-time `bun run wrangler login`.
- `bun run wrangler <command>` runs any other Wrangler command on Node. Don't use `bunx wrangler`, which runs it on Bun.
