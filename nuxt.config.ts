// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	ssr: true,
	devtools: { enabled: true },
	modules: ["@nuxtjs/i18n"],

	css: ["~/assets/scss/global.scss"],

	i18n: {
		strategy: "prefix_and_default",
		defaultLocale: "en",
		customRoutes: "config", // disable custom route with page components
		pages: {
			personal: {
				en: "/personal",
				fr: "/personnel",
			},
		},
	},
});
