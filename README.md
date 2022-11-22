# Create Nuxt 3 Enterprise
Author: [Michał Kuncio](https://michalkuncio.com/)

![Alt text](additional/cover_photo.webp?raw=true "Cover photo")

## Motivation

Currently, default Nuxt 3 scaffolding through Nuxi only creates basic files like App.vue, nuxt.config etc. Every time I started a new project I had to recreate directory structure from scratch with pages, assets, layouts, components composables etc. Also there were some mundane tasks I had to do every single time like setting eslint/prettier, useHead, pinia store etc. So I came up with the idea to create a starter for every nuxt project with the features I'm installing and setting up every time I start a new project.

## Getting started

To generate a new nuxt 3 enterprise project:

```bash
npx create-nuxt3-enterprise
```

## Current features
- official nuxt directory structure out of the box
- eslint/prettier config
- pinia state management
- histoire for user stories
- pages
- API routes
- server middlewares
- components
- layouts
- useHead
- nav component
- vitest testing