import { defineConfig } from 'astro/config';

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),

  // srcDir: 'src',
  // publicDir: 'public',
  // outDir: 'dist',
  // site: 'https://www.my-site.dev',
  // root: '.'
});