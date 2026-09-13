Put image files you want the site to use directly in this folder.

LOGO
----
Name your logo file exactly: logo.png
Then open data/config.js and set SHOW_LOGO to true.
It will appear next to the club name in the top navigation bar.
A square image (roughly 150x150px or larger, transparent background)
works best.

FAVICON (the small icon in the browser tab)
--------------------------------------------
Delete this note, then place a file named exactly one of these directly
inside the `app` folder (not this `public` folder):
  app/favicon.ico
  app/icon.png
Next.js will pick it up automatically — no code changes needed.

EVENT / OTHER IMAGES
---------------------
Drop any image here, e.g. public/my-photo.jpg, then reference it in a
page as /my-photo.jpg.
