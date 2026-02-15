# [3.0.0](https://github.com/phoinixi/jsonresume-theme-stackoverflow/compare/v2.1.0...v3.0.0) (2026-02-15)


* feat!: v3.0.0 — Svelte SSR, dark mode, i18n, accessibility ([31c4f70](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/31c4f701432a9593a89cd121e3f3f7f7aca3a089))


### Bug Fixes

* add spacing between profile links ([3f2f897](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/3f2f8970ba118c86236e349bb6b1db27f12e1f00))
* add URL support for education and volunteer sections ([#105](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/105)) ([d3c8564](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/d3c8564a2647551e6f22975741940f7477f486f3)), closes [#99](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/99)
* dark mode uses warm zinc palette, fix demo landing iframe and light/dark rendering ([2f06a14](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/2f06a147c1e03060811c3afbd1669fcfdb3470d0))
* make company name clickable with url field (Fixes [#98](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/98)) ([c12fed9](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/c12fed934cc8d81793508fe8a73abe47e57c8d2b))
* pass language option through render() for i18n support ([754029b](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/754029b7af2cdbcd0476d3b90b67ee3677d74c39))
* rebuild dist with normalizeLevel in bundle ([b683236](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/b683236fe750c35ea57b1fb634df3f1a4be8960d))
* resolve HTML validation errors (Fixes [#92](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/92)) ([72fd583](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/72fd583c60b74d1d84f9b1ba579e64414fbb2495))
* update repository URL and screenshot paths in README ([cca232d](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/cca232d84766705169032893527598e0d311d7c1))


### Features

* **a11y:** add accessibility improvements ([8d91ace](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/8d91ace67b2d633a62939184efc71901279e6fd2)), closes [#resume](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/resume) [#2c5777](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/2c5777) [#dfeaf1](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/dfeaf1)
* add 12 language translations for i18n ([020c207](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/020c207ba24aba0cce3405156ee77740eab4dfee))
* add dark mode support via prefers-color-scheme ([b3bed16](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/b3bed16ebd01e5b1b60ef46382656087d2142f03))
* add GitHub Pages demo with light/dark preview and landing page ([ef337b4](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/ef337b45b68edba262345ddc01bcb7864bb34899))
* add i18n localization support for dates and section titles ([#103](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/103)) ([52355bd](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/52355bdc2a57d11d2c3ad7c29da61c8692211454)), closes [#94](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/94)
* add override.css stylesheet to resume template ([#104](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/104)) ([17892c5](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/17892c5384bece759a65b76b8f412ec8f2adec1b)), closes [#97](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/97)
* add theme customization via resume.json meta field ([249b95f](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/249b95ff4a99640ea790e39a4249b1d9526e1d69))
* **css:** add mobile responsive styles ([e2db48e](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/e2db48ef4aaf0e9d39d8357921204c1e6706ded9))
* migrate from Handlebars to Svelte SSR ([4eb6386](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/4eb6386d07730e54e37e9fc8b5486328ed4616a3))
* normalize skill/language levels to support synonyms and i18n ([dca1e65](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/dca1e658d08bc109c48792b6ce4481a793de93ce))


### BREAKING CHANGES

* Complete rewrite from Handlebars to Svelte SSR.
- Handlebars templates replaced with Svelte 5 components
- render() now returns full HTML document (not a fragment)
- Node.js 18+ required
- New features: dark mode, 12 languages, theme customization, smart skill levels, accessibility, responsive design

# [2.2.0](https://github.com/phoinixi/jsonresume-theme-stackoverflow/compare/v2.1.0...v2.2.0) (2026-02-15)


### Bug Fixes

* add spacing between profile links ([3f2f897](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/3f2f8970ba118c86236e349bb6b1db27f12e1f00))
* add URL support for education and volunteer sections ([#105](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/105)) ([d3c8564](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/d3c8564a2647551e6f22975741940f7477f486f3)), closes [#99](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/99)
* dark mode uses warm zinc palette, fix demo landing iframe and light/dark rendering ([2f06a14](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/2f06a147c1e03060811c3afbd1669fcfdb3470d0))
* make company name clickable with url field (Fixes [#98](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/98)) ([c12fed9](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/c12fed934cc8d81793508fe8a73abe47e57c8d2b))
* pass language option through render() for i18n support ([754029b](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/754029b7af2cdbcd0476d3b90b67ee3677d74c39))
* rebuild dist with normalizeLevel in bundle ([b683236](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/b683236fe750c35ea57b1fb634df3f1a4be8960d))
* resolve HTML validation errors (Fixes [#92](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/92)) ([72fd583](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/72fd583c60b74d1d84f9b1ba579e64414fbb2495))
* update repository URL and screenshot paths in README ([cca232d](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/cca232d84766705169032893527598e0d311d7c1))


### Features

* **a11y:** add accessibility improvements ([8d91ace](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/8d91ace67b2d633a62939184efc71901279e6fd2)), closes [#resume](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/resume) [#2c5777](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/2c5777) [#dfeaf1](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/dfeaf1)
* add 12 language translations for i18n ([020c207](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/020c207ba24aba0cce3405156ee77740eab4dfee))
* add dark mode support via prefers-color-scheme ([b3bed16](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/b3bed16ebd01e5b1b60ef46382656087d2142f03))
* add GitHub Pages demo with light/dark preview and landing page ([ef337b4](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/ef337b45b68edba262345ddc01bcb7864bb34899))
* add i18n localization support for dates and section titles ([#103](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/103)) ([52355bd](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/52355bdc2a57d11d2c3ad7c29da61c8692211454)), closes [#94](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/94)
* add override.css stylesheet to resume template ([#104](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/104)) ([17892c5](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/17892c5384bece759a65b76b8f412ec8f2adec1b)), closes [#97](https://github.com/phoinixi/jsonresume-theme-stackoverflow/issues/97)
* add theme customization via resume.json meta field ([249b95f](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/249b95ff4a99640ea790e39a4249b1d9526e1d69))
* **css:** add mobile responsive styles ([e2db48e](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/e2db48ef4aaf0e9d39d8357921204c1e6706ded9))
* migrate from Handlebars to Svelte SSR ([4eb6386](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/4eb6386d07730e54e37e9fc8b5486328ed4616a3))
* normalize skill/language levels to support synonyms and i18n ([dca1e65](https://github.com/phoinixi/jsonresume-theme-stackoverflow/commit/dca1e658d08bc109c48792b6ce4481a793de93ce))
