<template>
	<div>
		<Nav :current-page="currentPage" :pages="pages" />
		<div class="container">
			<!-- <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="600"> -->
			<slot />
			<!-- </transition> -->
		</div>
		<!-- <Footer /> -->
	</div>
</template>

<script setup>
const pages = computed(() => {
	const routes = this.$router.options.routes[0].children;
	const out = routes.map((r) => ({ name: r.name, slug: r.meta.slug, showInNav: r.meta.showInNav, order: r.meta.navOrder }));
	return out;
});

const currentPage = computed(() => {
	return this.pages.find((p) => p.name === this.$route.name);
});
</script>

<style lang="scss">
.container {
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
