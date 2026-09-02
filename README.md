# Pangea Labs

Editable Next.js source for the Pangea Labs website at `pangealabs.space`.

## Status

This repository was initialized from the current production website after the original Vercel deployment had been created directly through the Vercel CLI and was not linked to a GitHub repository.

The current code is a clean reconstruction of the published site structure and content. It is **not claimed to be a byte-for-byte copy of the original local Claude Code workspace**.

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

## Security

Do not commit credentials or environment files. `.env` and `.env.*` are ignored by Git.

The existing production Vercel project is currently separate from this repository. Connecting this repository to Vercel should be done deliberately after reviewing a preview deployment.
