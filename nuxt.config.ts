// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "RBAC",
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BACKEND_URI,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@formkit/nuxt",
  ],
  css: ["vue-toast-notification/dist/theme-default.css"],
  routeRules: {
    "/api/**": { proxy: { to: "http://localhost:3337/api/**" } },
  },
});
