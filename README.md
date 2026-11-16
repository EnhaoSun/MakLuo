# Mak Luo Claypot — Budapest

Responsive, editorial restaurant website demo for **罗妈砂锅 / Mak Luo Claypot** in Budapest, Hungary.

## What's included

- **Hungarian (default), English, Simplified Chinese** switcher with saved selection
- Responsive landing page: hero, brand story, claypot experience, featured dishes, contact and directions
- Interactive, translated menu categories (favorites, claypots, rice noodles, sides) and HUF prices
- No dependencies, no frameworks, no build step. Static HTML, CSS, and vanilla JS.
- Accessible menu navigation, semantic markup, reduced-motion support, lazy-loaded images.
- Ready for Vercel static hosting.

## Local preview

Open `index.html` in a browser. Alternatively, for a local web server:

```sh
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Production checklist

- **Photo approval:** Dish photos currently use temporary image URLs from Mak Luo's public Wolt listing. Some editorial photography is also referenced. Get the restaurant's image usage approval, move the final files to `/assets/`, and replace external hotlinks before a public launch. Only approved restaurant photography should be published.
- **Menu review:** Dish names, translations, and dine-in prices were drafted from supplied menu screenshots, not Wolt delivery prices. Confirm accuracy and availability directly with the restaurant.
- **Hours:** Listed as 11:00–22:00 based on current public business listings. Confirm holiday hours with management.
- **Brand copy:** Historical origin narrative is based on the supplied brand research pack, not an official, independently approved brand statement.
- **Reservations:** This demo does not take bookings or payments; it links to maps, phone, Instagram, and Wolt.
- **Images:** Menu photo URLs are centralized in `PHOTO` in `app.js` to simplify replacement.

## Restaurant details

Mak Luo Claypot · 罗妈砂锅
Papnövelde utca 10, 1056 Budapest, Hungary
+36 70 410 3944
https://www.instagram.com/makluo_claypot/

## Source

Designed as an independent website proposal/demo. Not an official published website until approved by the restaurant.
