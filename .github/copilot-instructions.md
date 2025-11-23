# Portfolio Project - AI Agent Instructions

## Architecture Overview

This is a Next.js 16 (Pages Router) portfolio site with:
- **CMS**: Contentful (headless CMS) for projects and skills
- **UI**: MUI 7 + Emotion for styling
- **Deployment**: Static generation with ISR (60s revalidation)
- **Package Manager**: pnpm (preferred) or npm

## Key Design Patterns

### Graceful CMS Degradation
The site works without Contentful credentials. See `lib/contentful.js`:
- Client creation is conditional: `client = space && accessToken ? createClient(...) : null`
- All fetch functions (`getProjects`, `getSkills`) return `[]` if client is null
- `getStaticProps` provides hardcoded fallbacks when CMS returns empty (see `pages/index.js` lines 40-50)

**Why**: Enables local development and demos before CMS setup.

### Component Data Handling
Components accept both string format (`"React - 8"`) and Contentful objects (`{fields: {name, rating}}`):
- `components/Skills.js` `parseSkill()` function handles dual formats
- This allows fallback data and CMS data to use the same component

### MUI Theme Customization
Global theme in `src/theme.js` defines:
- Custom color palette (warm tones: `#5c3d2e`, `#f2c8a0`, `#fff8f2`)
- Component overrides for `MuiButton` (pill-shaped, no text transform) and `MuiCard` (rounded corners, soft shadows)
- Typography using Poppins/Inter fonts (loaded in `pages/_app.js`)

## Critical Workflows

### Development Server
```bash
npm run dev          # or pnpm dev
# Runs on http://localhost:3000
```

**Note**: Uses Next.js 16 with Turbopack. Legacy behavior warnings are expected.

### Contentful Setup (Required for CMS)
1. Create content models in Contentful:
   - `project`: title, description, link, image, createdAt
   - `skill`: name (text), rating (integer 1-10)
2. Add API credentials to `.env.local`:
   ```
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_DELIVERY_TOKEN=your_delivery_token
   ```
3. Restart dev server (env vars only read at startup)

### Adding New Pages
- Create in `pages/` directory (Pages Router convention)
- Import `Header` component for consistent nav
- Use `Container maxWidth="lg"` for layout consistency
- Add route to `Header.js` NavButton list

### Styling Conventions
- Use MUI `sx` prop for component-level styles (no CSS files)
- Reference theme values: `color: 'text.secondary'`, `bgcolor: 'background.paper'`
- Responsive design with `sx={{ display: { xs: 'none', md: 'block' } }}`

## Common Tasks

### Add a new skill field or project field
1. Update Contentful content model in web UI
2. Modify fetch function in `lib/contentful.js` if needed
3. Update component props in `components/` to consume new field
4. Restart dev server to clear Next.js cache

### Change theme colors
Edit `src/theme.js` → `palette` object. Changes apply globally via `ThemeProvider` in `pages/_app.js`.

### Debug Contentful errors
- Check browser console for `"Error fetching projects/skills"` messages
- Verify entries are **published** in Contentful (Delivery API only returns published content)
- Confirm `.env.local` credentials match Contentful space settings

## Files to Reference

- `lib/contentful.js` - CMS integration pattern with null safety
- `pages/index.js` - getStaticProps with fallback data pattern
- `components/Skills.js` - Dual-format data handling example
- `src/theme.js` - MUI customization approach
- `pages/_app.js` - Global providers and font loading

## Dependencies Note

Using latest stable versions:
- Next.js 16.0.3 (Turbopack)
- React 19.1.0
- MUI 7.3.5 (Grid v2 - note deprecated props warnings)
- Contentful SDK 11.9.0

Always restart the dev server after `npm install` or env changes.
