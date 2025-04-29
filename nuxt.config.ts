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
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
  ],

  devtools: { enabled: true },

  css: ['./app/assets/css/main.css'],

  colorMode: {
    preference:    'system', // default value of $colorMode.preference
    fallback:      'light', // fallback value if not system preference found
    hid:           'nuxt-color-mode-script',
    globalName:    '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix:   '',
    classSuffix:   '',
    storage:       'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey:    'nuxt-color-mode',
  },

  srcDir: './app',

  devServer: { port: import.meta.env.SERVER_PORT },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',

  vite: { plugins: tailwindcss() },

  eslint: { config: { stylistic: true } },

  icon: { componentName: 'NuxtIcon' },

  shadcn: {
    prefix:       'Ui',
    componentDir: './app/components/ui',
  },
});
