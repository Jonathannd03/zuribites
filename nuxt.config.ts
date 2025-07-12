// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: false,
  target: "static",
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },

  app: {
    head: {
      title: "ZuriBites",
      meta: [
        {
          name: "description",
          content: "A Bite of Joy in Every Slice!",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/images/logo.png" }],
    },
  },
  devtools: { enabled: true },

  // Optional: Explicit PostCSS config (if not auto-detected)
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-04-19",
});