1. **Phase 1 — Confirm context (read-only checks)**

   - Repo is Next.js with `yarn`; no existing E2E framework detected.
   - Netlify config exists (`netlify.toml`), but user requested **no CI/Netlify changes**.
   - Pages in `app/`: `/`, `/blog`, `/contact`, `/contact/success`, `/credits`, dynamic `/blog/[id]`, `/blog/tags/[tag]`.
   - Mailchimp API route: `app/api/subscribe/route.ts`.
   - Contact form posts to `https://submit-form.com/9DeQ2TdBN` in `components/ContactForm/ContactForm.tsx`.

2. **Phase 2 — Decide framework + configuration**

   - Use Playwright for E2E (desktop + mobile projects).
   - Configure `webServer` to run `yarn dev` locally; use `E2E_BASE_URL` with default `http://localhost:3000`.
   - Add two projects: Desktop Chromium + Mobile (e.g., iPhone 14).

3. **Phase 3 — Route coverage strategy**

   - Static routes: `/`, `/blog`, `/contact`, `/contact/success`, `/credits`.
   - Blog posts: derive IDs from `content/blog/*` and test `/blog/<id>`.
   - Tag pages: derive tags from each `content/blog/*/metadata.ts` and test `/blog/tags/<tag>`.

4. **Phase 4 — Navigation tests**

   - Desktop: header nav links navigate to expected routes; assert page-specific content.
   - Mobile: open hamburger, verify nav links navigate, confirm menu closes after navigation.
   - Add `data-testid` hooks if selectors are ambiguous.

5. **Phase 5 — Mobile menu behavior**

   - Test open/close toggle in mobile project.
   - Assert menu closes after selecting a nav link.

6. **Phase 6 — Mailchimp form tests**

   - Add `E2E=true` behavior in `app/api/subscribe/route.ts` to use `MAILCHIMP_LIST_ID_TEST`.
   - Validation coverage: empty input disables submit; invalid email returns 400; valid email shows success.

7. **Phase 7 — Contact form tests**

   - Mock `https://submit-form.com/9DeQ2TdBN` using Playwright `route()` to avoid live submission.
   - Validate required fields and email format (HTML5 validation).
   - Simulate success (302 to `/contact/success`) and assert redirect.

8. **Phase 8 — Local-only scripts**

   - Add `e2e` (headless), `e2e:ui` (headed), `e2e:install` (Playwright browsers).

9. **Phase 9 — Local setup docs**
   - Document env vars: `E2E=true`, `MAILCHIMP_LIST_ID_TEST`, `MAILCHIMP_API_KEY`, `MAILCHIMP_SERVER_PREFIX`, optional `E2E_BASE_URL`.
   - Explicitly note: **no CI/Netlify pipeline changes**.
