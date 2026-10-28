# CLAUDE.md — readingspgh.com

Adds to `~/dev/CLAUDE.md`. See `README.md` for the stack and commands.

- Use Bun for everything except Wrangler, which must run on Node through `bun run wrangler …` (never `bunx wrangler`). Under Bun, `wrangler dev` answers every request with 503.
- The site is fully prerendered (`adapter-static`) and deployed as an assets-only Worker. Redirects live in `static/_redirects`, not in routes: prerendering a redirect route to a `/#hash` target writes junk files like `build/#about.html`.

## Machine footprint

| Location | What | Created by | Size | How to remove |
|---|---|---|---|---|
| `/opt/homebrew/Cellar/node@22` and its dependencies `brotli`, `c-ares`, `ca-certificates`, `icu4c@78`, `libnghttp2`, `libnghttp3`, `libuv`, `lz4`, `openssl@3`, `readline`, `simdjson`, `sqlite`, `uvwasi`, `xz`, `zstd` | Node.js 22.23.4 for Wrangler, keg-only and unlinked (`brew unlink node@22`), so not on the PATH | Claude, `brew install node@22`, 2026-10-28 | ~210 MB | `brew uninstall node@22 && brew autoremove` (autoremove only removes dependencies nothing else uses) |
| `~/Library/Preferences/.wrangler` | Wrangler's logs and, after `bun run wrangler login`, the Cloudflare login token | Existed before this project (logs from 2026-09) | small | `bun run wrangler logout`, then delete the folder |
