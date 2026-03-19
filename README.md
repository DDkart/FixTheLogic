# Fix The Logic

A DIY tech troubleshooting website providing clear, step-by-step repair guides for home appliances, smart home devices, printers, and software errors.

## Live Site
[https://fixthelogic.in](https://fixthelogic.in)

## Structure
- `index.html` — Homepage
- `appliances.html`, `printers-office.html`, `smart-home.html`, `gadgets.html`, `software-errors.html` — Category pages
- `about.html`, `contact.html` — Info pages
- `privacy-policy.html`, `terms.html`, `disclaimer.html`, `cookie-policy.html` — Legal pages
- `images/` — All article images organised by article slug
- `css/style.css` — Main stylesheet
- `css/nav.js` — Mobile navigation script
- `sitemap.xml` — XML sitemap for search engines
- `robots.txt` — Crawl instructions
- `ads.txt` — AdSense verification (update with your publisher ID)
- `.nojekyll` — Disables Jekyll processing on GitHub Pages
- `CNAME` — Custom domain configuration

## Deployment (GitHub Pages)
1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set Source: **Deploy from a branch → main → / (root)**
4. Add custom domain `fixthelogic.in` in the Custom Domain field
5. Enable **Enforce HTTPS**
6. Point your domain DNS: add a CNAME record `www → YOUR-USERNAME.github.io` and A records for the apex domain to GitHub's IPs

## AdSense Setup
1. Apply at [Google AdSense](https://www.google.com/adsense/)
2. After approval, update `ads.txt` with your actual publisher ID


## Contact
support@fixthelogic.in
