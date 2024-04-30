import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";

import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: 'https://www.leoferreira.dev/',
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'daily'
    }),
    tailwind({
      applyBaseStyles: false
    }),
    robotsTxt()
  ],
  output: "hybrid",
  adapter: vercel({
    imageService: true
  })
});