// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: 'https://joscarranzs.github.io',
  base: '/mydocs',
  devToolbar: {
    enabled: false,
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
