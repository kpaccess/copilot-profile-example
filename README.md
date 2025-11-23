# Portfolio (Next.js + MUI + Contentful)

This is a small portfolio site scaffold using Next.js, React, MUI and Contentful as a free CMS.

Features

- Home with hero and skills
- Projects page that fetches `project` entries from Contentful
- Contact page (local form)

Getting started

1. Install dependencies

```bash
npm install
```

2. Create Contentful space (free)

- Sign up at https://www.contentful.com/ and create a new Space.
- Add a Content Model named `project` with these fields:
  - `title` (Short text)
  - `description` (Long text)
  - `link` (Short text) — optional URL to the project
  - `image` (Media) — optional
  - `createdAt` (Date) — optional
- Add a Content Model named `skill` with these fields:
  - `name` (Short text) — skill name (e.g., "React", "TypeScript")
  - `rating` (Integer) — skill rating 1-10
- Add one or more entries of type `project` and `skill` and publish them.

3. Copy `.env.local.example` to `.env.local` and fill in your credentials

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_DELIVERY_TOKEN=your_delivery_api_token
```

4. Run the dev server

```bash
npm run dev
```

Open `http://localhost:3000`.

Notes

- The CMS integration uses the Contentful Delivery API. The free tier is sufficient for demo sites.
- Projects page uses `getStaticProps` and will revalidate every 60s. If you make changes in Contentful, publish them and the site will show updates after revalidation or on rebuild.
- Skills are now fetched from Contentful. You can edit skill names and ratings directly in the CMS and they'll update on the site after revalidation.

Want me to: add image uploads, add richer project fields, or switch to Sanity/Tina/Git-based CMS? Reply which option you prefer.

## Using pnpm (optional, recommended)

- `pnpm` is a faster, more disk-efficient package manager. If you'd like to switch to `pnpm`, run the commands below.

Install `pnpm` (recommended via Corepack):

```bash
# enable Corepack (if not already enabled)
corepack enable
corepack prepare pnpm@latest --activate
```

Install dependencies with `pnpm`:

```bash
cd ~/projects/github-copilot/portfolio
rm -rf node_modules package-lock.json
pnpm install
pnpm dev
```

- A `pnpm-lock.yaml` will be created. Commit it to your repo.
- If you prefer to keep `npm`, the project still works with the existing `scripts`.
