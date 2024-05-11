// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          type: "text/javascript",
          defer: true,
          src: "https://apis.google.com/js/api.js",
        },

        {
          type: "text/javascript",
          defer: true,
          src: "https://accounts.google.com/gsi/client",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      baseUrl: process.env.BASE_URL,
    },
  },
});
