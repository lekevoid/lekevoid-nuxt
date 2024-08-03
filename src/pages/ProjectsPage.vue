<template>
	<q-page class="q-px-lg q-px-md-md">
		<div class="page_content row">
			<div class="col-md-2"></div>
			<div class="col">
				<div class="row what_i_did flex-center">
					<div class="col column no-wrap justify-center items-start text-left">
						<h2>Projects</h2>
						<!-- <Project id="broadsign" ref="project_broadsign">
							<template #short>
								<div class="overline" v-scroll-fire="scaleFromRight"></div>
								<h3 class="title">
									<a href="https://broadsign.com" target="_blank" rel="noreferrer noopener">Broadsign</a>
								</h3>
								<p>An international digital signage company.</p>
							</template>
							<template #details>
								<h5 class="q-mb-sm">Features :</h5>
								<ul>
									<li>All the things</li>
								</ul>
								<div class="techs row items-center q-mb-lg">
									<h5 class="text-no-wrap q-my-md q-mr-md">{{ $t("made_with") }} :</h5>
									<div class="techs_list col-12 col-md-auto">
										<q-img :src="logo_react" class="icon_tech" contain>
											<q-tooltip>React</q-tooltip>
										</q-img>
										<q-img :src="logo_gatsby" class="icon_tech" contain>
											<q-tooltip>GatsbyJS</q-tooltip>
										</q-img>
										<q-img :src="logo_wordpress" class="icon_tech" contain>
											<q-tooltip>Wordpress</q-tooltip>
										</q-img>
									</div>
								</div>
								<p>
									<q-btn type="a" color="primary" icon="open_in_new" href="https://broadsign.com" target="_blank" :label=" $t('view_live') " />
								</p>
							</template>
						</Project> -->
						<Project id="gigi_retzo" invert ref="project_gigi_retzo" name="project_gigi_retzo">
							<template #short>
								<div class="overline" v-scroll-fire="scaleFromLeft"></div>
								<h3 class="title">
									<a href="https://gigiretzo.com" target="_blank" rel="noreferrer noopener">{{ $t("projects.gigi_retzo.title") }}</a>
								</h3>
								<p>{{ $t("projects.gigi_retzo.short_desc") }}</p>
							</template>
							<template #details>
								<h5 class="q-mb-sm">{{ $t("features") }} :</h5>
								<ul>
									<li>{{ $t("projects.gigi_retzo.features.0") }}</li>
									<li>{{ $t("projects.gigi_retzo.features.1") }}</li>
								</ul>
								<div class="techs row items-center q-mb-lg">
									<h5 class="text-no-wrap q-my-md q-mr-md">{{ $t("made_with") }} :</h5>
									<div class="techs_list col-12 col-md-auto">
										<q-img :src="logo_wordpress" class="icon_tech" contain>
											<q-tooltip>Wordpress</q-tooltip>
										</q-img>
										<q-img :src="logo_woocommerce" class="icon_tech" contain>
											<q-tooltip>Woocommerce</q-tooltip>
										</q-img>
									</div>
								</div>
								<p>
									<q-btn type="a" color="primary" icon="open_in_new" href="https://gigiretzo.com" target="_blank" :label="$t('view_live')" />
								</p>
							</template>
						</Project>
						<Project id="bokkle" hide-mobile ref="project_bokkle">
							<template #short>
								<div class="overline" v-scroll-fire="scaleFromRight"></div>
								<h3 class="title">
									<a href="https://bokkle.web.app" target="_blank" rel="noreferrer noopener">{{ $t("projects.bokkle.title") }}</a>
								</h3>
								<p>{{ $t("projects.bokkle.short_desc") }}</p>
							</template>
							<template #details>
								<h5 class="q-mb-sm">{{ $t("features") }} :</h5>
								<ul>
									<li>{{ $t("projects.bokkle.features.0") }}</li>
									<li>{{ $t("projects.bokkle.features.1") }}</li>
									<li>{{ $t("projects.bokkle.features.2") }}</li>
									<li>{{ $t("projects.bokkle.features.3") }}</li>
								</ul>
								<div class="techs row items-center q-mb-lg">
									<h5 class="text-no-wrap q-my-md q-mr-md">{{ $t("made_with") }} :</h5>
									<div class="techs_list col-12 col-md-auto">
										<q-img :src="logo_vue" class="icon_tech" contain>
											<q-tooltip>Vue</q-tooltip>
										</q-img>
										<q-img :src="logo_firebase" class="icon_tech wide" contain>
											<q-tooltip>Firebase</q-tooltip>
										</q-img>
									</div>
								</div>
								<p>
									<q-btn type="a" color="primary" icon="open_in_new" href="https://bokkle.web.app" target="_blank" :label="$t('view_live')" />
								</p>
							</template>
						</Project>
					</div>
				</div>
			</div>
			<div class="col-md-2"></div>
		</div>
	</q-page>
</template>

<script>
import Project from "../components/Project.vue";

import logo_agility from "../img/logos/agility.svg";
import logo_css from "../img/logos/css.svg";
import logo_firebase_dark from "../img/logos/firebase_dark.svg";
import logo_firebase_light from "../img/logos/firebase_light.svg";
import logo_gatsby from "../img/logos/gatsby.svg";
import logo_html from "../img/logos/html.svg";
import logo_laravel from "../img/logos/laravel.svg";
import logo_php from "../img/logos/php.svg";
import logo_netlify_cms from "../img/logos/netlify_cms.svg";
import logo_prismic from "../img/logos/prismic.svg";
import logo_react from "../img/logos/react.svg";
import logo_sass from "../img/logos/sass.svg";
import logo_svelte from "../img/logos/svelte.svg";
import logo_vue from "../img/logos/vue.svg";
import logo_wordpress from "../img/logos/wordpress.svg";
import logo_woocommerce from "../img/logos/woocommerce.svg";

export default {
	name: "PageProjects",
	components: { Project },
	data: () => ({
		logo_html: logo_html,
		logo_css: logo_css,
		logo_sass: logo_sass,
		logo_vue: logo_vue,
		logo_react: logo_react,
		logo_svelte: logo_svelte,
		logo_gatsby: logo_gatsby,
		logo_php: logo_php,
		logo_laravel: logo_laravel,
		logo_agility: logo_agility,
		logo_netlify_cms: logo_netlify_cms,
		logo_prismic: logo_prismic,
		logo_wordpress: logo_wordpress,
		logo_woocommerce: logo_woocommerce,
	}),
	computed: {
		logo_firebase() {
			return this.$q.dark.isActive ? logo_firebase_dark : logo_firebase_light;
		},
	},
	methods: {
		scaleFromLeft(el) {
			if (el) {
				el.classList.add("from_left");
			}
		},
		scaleFromRight(el) {
			if (el) {
				el.classList.add("from_right");
			}
		},
		scrollToProject() {
			if (this.$route.params.project) {
				const project = `project_${this.$route.params.project}`;
				if (this.$refs[project]) {
					const target = this.$refs[project].$el;
					console.log(target);
					target.scrollIntoView({ behavior: "smooth" });
				}
			}
		},
	},
	created() {},
	mounted() {
		setTimeout(() => {
			this.scrollToProject();
		}, 300);
	},
};
</script>

<style lang="scss" scoped>
@keyframes scaleFromLeft {
	0% {
		transform: scaleX(0);
	}

	100% {
		transform: scaleX(1);
	}
}

@keyframes scaleFromRight {
	0% {
		transform: scaleX(0);
	}
	100% {
		transform: scaleX(1);
	}
}

body {
	transition: background-color 1s;
}

.q-page {
	padding-bottom: 100px;
	padding-top: 100px;
}
.project {
	margin-bottom: 100px;
}

.overline {
	width: 70vw;
	max-width: 500px;
	border-bottom: 3px solid $accent;
	transform: scaleX(0);
	position: absolute;
	top: 20px;
	left: 48px;
	transform-origin: left center;
	animation: scaleFromLeft 0.6s ease-out 0s 1 normal forwards running;
}

.icon_tech {
	height: 50px;
	width: 60px;
	margin: 0 8px;

	&.wide {
		width: 80px;
	}
}

@media (min-width: $breakpoint-md-min) {
	.project {
		position: relative;
		padding-top: 60px;
	}

	.overline {
		top: -20px;

		&.from_left {
			left: 48px;
		}

		&.from_right {
			right: 0;
			transform-origin: right center;
			animation: scaleFromRight 0.6s ease-out 0s 1 normal forwards running;
		}
	}
}
</style>
