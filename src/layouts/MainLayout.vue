<template>
	<q-layout view="lHh Lpr lFf" :class="`page_${currentPage}`">
		<AppNav :current-page="currentPage" :pages="pages" />
		<q-page-container>
			<transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="600">
				<router-view />
			</transition>
		</q-page-container>
		<!-- <Footer /> -->
	</q-layout>
</template>

<script setup>
import { computed } from "vue";

import AppNav from "../components/AppNav.vue";
// import Footer from "../components/Footer.vue";

/*
RE-PUT ONCE QUASAR 2 IS WORKING
const pages = computed(() => {
	const routes = $router.options.routes[0].children;
	const out = routes.map((r) => ({ name: r.name, slug: r.meta.slug, showInNav: r.meta.showInNav, order: r.meta.navOrder }));
	return out;
});
*/

const currentPage = "";
/*
RE-PUT ONCE QUASAR 2 IS WORKING
const currentPage = computed(() => {
	return pages.value.find((p) => p.name === this.$route.name);
}); */
</script>

<style lang="scss">
.q-page {
	max-width: 100vw;
	overflow-x: hidden;
}

.page_content {
	position: relative;
	max-width: 1600px;
	margin-right: auto;
	margin-left: auto;
}
.q-page.animated.fadeOut {
	animation-duration: 0s;
	position: absolute;
}
</style>
