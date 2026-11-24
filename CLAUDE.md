# heywrist.com

The website for the heywrist apps: a landing page per app, plus its privacy policy, terms and support pages. Next.js 16.2 (App Router), React 19, Tailwind 4. This Next.js version changes APIs that older ones had, so read the matching guide in `node_modules/next/dist/docs/` before using an API you haven't checked.

- **Layout:** each app lives at `src/app/<slug>/`, with `privacy/`, `terms/` and `support/` subpages using `src/app/components/PolicyLayout.tsx`.
  - Slugs are the apps' repository names, not their store names: `chatty` is Sona, `notes` is Dexter, `watery` is Quench (`next.config.ts` redirects `/quench/*` there).
  - Pass `slug` to PolicyLayout explicitly. Without it, links are derived from the display name, so a rename sends the breadcrumb and the Terms link to a 404.
- **Subdomains:** `src/middleware.ts` serves `<slug>.heywrist.com/<path>` from `/<slug>/<path>` for the apps listed in `subdomainApps`. tickd.heywrist.com is retired; Tickd's pages are at heywrist.com/tickd.
- **Live store links:** App Store listings link to these pages in both forms, `heywrist.com/<slug>/privacy` and `<slug>.heywrist.com/privacy`, so renaming a slug or dropping a subdomain breaks a live store link.
  - The bare `/privacy` path redirects to a 404, so never link it.
  - Check every changed URL by HTTP status (`curl -s -o /dev/null -w "%{http_code}" -L <url>`). A legal link that is present but 404s fails App Review guideline 3.1.2.
- **Privacy pages** state what the build in the store does today.
  - When an app's data handling changes, update its page so it's true by the time that build goes live.
  - Audit a page against every property of every analytics call that app sends, and against any AI text the app's backend retains.
- **Production data:** `/api/waitlist` and `/api/analytics/view` write to a production MongoDB (`MONGODB_URI`, `MONGODB_DB`), storing waitlist emails and page views keyed by IP address. Don't send test data to the deployed site.
- **Commands:** `npm run dev`, `npm run build`, `npm run lint`. There are no tests.
- **Deploys:** a push to `main` deploys to production on Vercel, so every push is a release of every app's legal pages.
- `/typeroster` is the native Mac font manager. Its Help menu and store record use `/typeroster/support` and `/typeroster/privacy`; its sample font credits are on `/typeroster/terms`.
