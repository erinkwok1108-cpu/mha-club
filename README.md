# Mental Health Awareness Club — Website

A Next.js + Tailwind CSS site for the club. Built to be easy to edit even
with limited coding experience — almost everything you'll want to change
lives in the `data/` folder.

## What to edit first

- `data/config.js` — club name, meeting info, contact details, Google Form link.
- `data/events.js` — all events. Set `featured: true` on one to feature it.
- `data/resources.js` — the resource library, grouped by category.
- `data/team.js` — executive team names and roles.

Colors and fonts live in `tailwind.config.js` and `app/layout.js` if you
ever want to change the palette or typefaces.

## Adding your logo

1. Put your logo file in the `public` folder and name it exactly `logo.png`
   (square, at least ~150x150px, transparent background works best).
2. In `data/config.js`, change `SHOW_LOGO` from `false` to `true`.

It'll show up next to the club name in the top navigation automatically —
no other code changes needed. See `public/README-images.txt` for favicon
instructions too.

## Running it locally

You'll need [Node.js](https://nodejs.org) version 18 or later installed.

1. Open a terminal in this folder.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the local dev server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The page will hot-reload as you edit files — no need to restart the server.

## Deploying it for free

The easiest option is **Vercel** (made by the creators of Next.js):

1. Push this project to a GitHub repository (create a free GitHub account
   if you don't have one, create a new repo, and follow GitHub's
   instructions to push this folder to it).
2. Go to [vercel.com](https://vercel.com) and sign up with your GitHub
   account.
3. Click **Add New → Project**, select your repository, and click **Deploy**.
   Vercel auto-detects that it's a Next.js project — you don't need to
   change any settings.
4. After a minute or two you'll get a free `.vercel.app` URL. Every time
   you push a change to GitHub, Vercel redeploys automatically.

You can later attach a custom domain (like `yourclubname.com`) for free
in the same Vercel project's settings, if you buy one separately.

**Alternative:** Netlify works almost identically — sign up, connect the
same GitHub repo, and it will detect the Next.js build settings
automatically.

## Notes

- No medical claims, staff endorsements, or real names/dates are included —
  placeholders are marked with `[brackets]` throughout the `data/` files.
- The footer includes a standing disclaimer that the club is educational,
  not clinical, and points to the Resources page for crisis support.
