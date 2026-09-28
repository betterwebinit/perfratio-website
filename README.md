# perfratio website

Website for **perfratio**, joining the Better Web ecosystem. An original editorial identity: ink-plum surfaces, amber and coral measurement accents, expressive serif headlines and an instrument-style comparison board. The Rustyll and Better Web websites inform the ecosystem links and documentation structure.

## Develop

Node.js 22.13+ is required.

```sh
npm ci
npm run dev
```

## Validate

```sh
npm run build
npm run lint
```

Routes: `/` (English), `/pt/` (Brazilian Portuguese), `/docs/` (English getting-started guide). Examples are interactive; commands can be copied. The terminal preview is explicitly illustrative.

## Repository migration

The project currently lives at `UnitedOpen-Source/perfratio`. Change `repository` in `app/config.ts` after its transfer to `betterwebinit` is completed. This updates source installation, release, issue and reference links together. This site does not transfer the repository.

## Hosting

Built with React and vinext, targeting Cloudflare Workers through the Sites Vite plugin. Hosting metadata is in `.openai/hosting.json`. No database, authentication or analytics are used by the website.

## Content sources

Content and commands reflect the source README, Cargo.toml and CLI at commit `2b8be84f2504fad11448790b0ce764fa36d0f19d` (replace this reference when updating the content). Energy measurement depends on supported accessible hardware sensors. No performance claims are inferred from the illustrative terminal.
