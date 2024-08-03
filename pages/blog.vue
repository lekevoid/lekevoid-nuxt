<template>
	<q-page class="q-px-lg">
		<div class="page_content row">
			<div class="col-md-1 col-lg-2"></div>
			<div class="col">
				<div class="hero flex flex-center column no-wrap">
					<h1 class="flex column items-center q-mt-none">{{ $t("blog.title") }}</h1>
				</div>
			</div>
			<div class="col-md-1 col-lg-2"></div>
		</div>
	</q-page>
</template>

<script>
// import Project from "../components/Project.vue";

export default {
	name: "PageBlog",
	components: {
		/* Project */
	},
	data: () => ({}),
	computed: {},
	methods: {
		getScrollPercent() {
			let h = document.documentElement,
				b = document.body,
				st = "scrollTop",
				sh = "scrollHeight";
			return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
		},
	},
	created() {},
	mounted() {},
};
</script>

<style lang="scss">
.q-page {
	padding-bottom: 100px;

	&.fadeOut {
		.hero {
			opacity: 0;
		}
	}
}

.hero {
	height: 80vh;
	margin-bottom: 20vh;
}
</style>
