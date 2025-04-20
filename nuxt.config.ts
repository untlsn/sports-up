import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],

  devtools: { enabled: true },

  css: ['./app/assets/css/main.css'],

  srcDir: './app',

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  vite: { plugins: tailwindcss() },

  eslint: { config: { stylistic: true } },

  icon: { componentName: 'NuxtIcon' },

  shadcn: {
    prefix:       'Ui',
    componentDir: './components/ui',
  },
});
