# covalent-ai.dev

Samuel Takata's site: Covalent AI, software developer for hire.

- `site/` is the web root. Plain HTML, CSS and JavaScript; no build step.
- `CONTENT.md` is the canonical copy for the site.
- The CIRA demo at `/cira/` is served by the CIRA service, not from this repository.

## Preview

```bash
python3 -m http.server 8102 -d site
```

## Deploy

The site is served by nginx on the VPS from `/var/www/covalent-ai.dev`. Deploy the committed
`site/` directory with versioned CSS and JS URLs, because nginx caches those for 30 days:

```bash
v=$(git rev-parse --short HEAD); out=$(mktemp -d); cp -R site/. "$out"
find "$out" -name '*.html' -exec sed -i '' -e "s#/style.css\"#/style.css?v=$v\"#g" -e "s#/script.js\"#/script.js?v=$v\"#g" {} +
rsync -rlz --delete --exclude '.well-known' "$out"/ vps:/var/www/covalent-ai.dev/
```

The three design variants built on 2026-09-21 are in the history of the `redesign-variants` branch.
