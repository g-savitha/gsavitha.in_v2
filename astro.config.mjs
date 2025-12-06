// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    expressiveCode({
      themes: ['dracula'],
      styleOverrides: {
        codeFontFamily: "'Source Code Pro', monospace",
        uiFontFamily: "'Comic Neue', sans-serif",
        frames: {
          frameBoxShadowCssValue: '4px 4px 0px #000',
          editorActiveTabBorderColor: '#000',
          editorTabBorderRadius: '0px',
        },
        borderColor: '#000',
        borderRadius: '0px',
        borderWidth: '2px',
      }
    }),
    mdx()
  ]
});