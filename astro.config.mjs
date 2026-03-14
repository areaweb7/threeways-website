// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',      // SSR + APIルート対応
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});
