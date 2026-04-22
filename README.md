# Cozy Coffee Website (Next.js)

A cozy small-business coffee website mockup built with Next.js App Router.

## Quick Start

1. Install dependencies:
   - `npm install`
2. Run development server:
   - `npm run dev`
3. Open:
   - [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run start` - Run built app in production mode
- `npm run lint` - Run lint checks

## Project Structure

- `app/` - Pages, layout, and global styles (App Router)
- `public/` - Static assets and placeholder images
- `website-outline.md` - Planning and hosting checklist
- `next.config.mjs` - Next.js config
- `package.json` - Scripts and dependencies

## Current Pages

- `/` Home
- `/menu`
- `/about`
- `/visit`
- `/contact`

## Deployment (Vercel recommended)

1. Push this project to GitHub.
2. Import the repo into Vercel.
3. Vercel auto-detects Next.js and runs `npm run build`.
4. Add your custom domain in Vercel project settings.
5. Update DNS records at your domain provider.

## Next Steps

- Replace placeholder text and images with real brand assets
- Replace placeholder API behavior with real email delivery/storage
- Add metadata and local SEO details
- Add Google Business Profile and local directory links

## TODO

- Hook `app/api/contact/route.js` to a real mail service (Resend, SendGrid, etc.) so contact form submissions are delivered to the business inbox.
