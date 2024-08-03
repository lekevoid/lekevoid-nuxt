<template>
	<footer class="row">
		<div class="col-md-1"></div>
		<div class="col flex justify-center items-center">
			<a href="https://www.facebook.com/lekevoid/" rel="noopener noreferrer" target="_blank" class="social_link">
				<q-img src="../img/icon_facebook.svg" class="social_icon" contain />
			</a>
			<a href="https://www.linkedin.com/in/kevin-gagnon-aa485972/" rel="noopener noreferrer" target="_blank" class="social_link">
				<q-img src="../img/icon_linkedin.svg" class="social_icon" contain />
			</a>
		</div>
		<div class="col-md-1"></div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	props: {},
	data: () => ({}),
	computed: {},
	methods: {},
	mounted() {},
	updated() {},
	watch: {},
};
</script>

<style lang="scss" scoped>
body.body--dark {
}

body.body--light {
}

footer {
	position: fixed;
	z-index: 100;
	bottom: 1rem;
	left: 0.6rem;
}

.social_link {
	margin: 0 0.4rem;
	padding-bottom: 0.2rem;
}

.social_icon {
	height: 1.2rem;
	width: 1.2rem;
}

@media (min-width: $breakpoint-md-min) {
	footer {
		position: relative;
		bottom: auto;
		left: 0;
		margin-bottom: 2rem;
	}

	.social_link {
		margin: 0 1rem;
	}

	.social_icon {
		height: 1.6rem;
		width: 1.6rem;
	}
}
</style>
