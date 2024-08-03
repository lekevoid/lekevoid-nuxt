<template>
	<header class="row">
		<div class="col-1"></div>
		<div class="col">
			<nav :class="['row items-center justify-end q-pt-md q-pb-sm', `line_moves_${navLineDirection}`]" ref="top_nav">
				<router-link dark v-for="(page, k) in pagesToDisplay" :to="{ name: page.name }" :key="k" :ref="`link_${page.slug}`">
					{{ $t(`nav_${page.slug}`) }}
				</router-link>
				<div class="underline" ref="nav_line"></div>
			</nav>
		</div>
		<div class="themes col-1 flex justify-end">
			<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="300">
				<!-- <button class="lang_icon en" v-if="$i18n.locale === 'fr'" @click="setLang('en')">EN</button> -->
				<p></p>
			</transition>
			<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="300">
				<!-- <button class="lang_icon fr" v-if="$i18n.locale === 'en'" @click="setLang('fr')">FR</button> -->
				<p></p>
			</transition>
			<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="300">
				<q-img class="theme_icon dark" v-if="!isDark" :src="icon_mode_dark" @click="$q.dark.set(true)" style="height: 30px; width: 30px">
					<q-tooltip>Dark Mode</q-tooltip>
				</q-img>
			</transition>
			<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="300">
				<q-img class="theme_icon light" v-if="isDark" :src="icon_mode_light" @click="$q.dark.set(false)" style="height: 30px; width: 30px">
					<q-tooltip>Light Mode</q-tooltip>
				</q-img>
			</transition>
		</div>
		<div class="col-1"></div>
	</header>
</template>

<script setup>
import { ref, computed, defineProps, onMounted, watch } from "vue";

import icon_mode_dark from "../img/icon_mode_dark.svg";
import icon_mode_light from "../img/icon_mode_light.svg";

const { currentPage, pages } = defineProps(["currentPage", "pages"]);

const navLineDirection = ref("none");

const isDark = computed(() => {
	/*
	RE-PUT ONCE QUASAR 2 IS WORKING
	if (this.$q.dark.isActive) {
		return true;
	} */
	return false;
});

const pagesToDisplay = computed(() => {
	return "";
	/*
	RE-PUT ONCE QUASAR 2 IS WORKING
	return this.pages.filter((p) => p.showInNav);
	*/
});

/*
RE-PUT ONCE QUASAR 2 IS WORKING
function removeNavLine() {
	this.navLineDirection = "hide";
}

function moveNavLine(from, to) {
	const targetLink = this.$refs[`link_${to.slug}`] && this.$refs[`link_${to.slug}`][0] ? this.$refs[`link_${to.slug}`][0].$el : false;
	const left = targetLink.offsetLeft;
	const right = this.$refs["top_nav"].clientWidth - (targetLink.offsetLeft + targetLink.clientWidth);

	if (targetLink && to.order) {
		if (to.order < from.order) {
			this.navLineDirection = "left";
		} else {
			this.navLineDirection = "right";
		}

		this.$refs["nav_line"].style.left = `${left}px`;
		this.$refs["nav_line"].style.right = `${right}px`;

		setTimeout(() => {
			this.navLineDirection = "none";
		}, 1000);
	} else {
		this.removeNavLine();
	}
}

function initNavLine() {
	if (this.currentPage) {
		this.moveNavLine("", this.currentPage);
	}
}
*/

function setLang(lang) {
	return;
	/*
	RE-PUT ONCE QUASAR 2 IS WORKING
	this.$i18n.locale = lang;
	setTimeout(() => {
		this.moveNavLine(this.currentPage, this.currentPage);
	}, 100);
	*/
}

onMounted(() => {
	// this.initNavLine();
	// window.addEventListener("resize", this.initNavLine);
});

watch(
	currentPage,
	(to, from) => {
		if (to.showInNav === false) {
			this.removeNavLine();
		} else if (to !== from) {
			console.log("update currentPage", from, to);
			this.moveNavLine(from, to);
		}
	},
	{ deep: true }
);
</script>

<style lang="scss" scoped>
body.body--dark {
	$linkColor: #fff;

	nav {
		background: #000;

		a {
			color: $linkColor;
		}

		.underline {
			border-color: $linkColor;
		}
	}
}

body.body--light {
	$linkColor: $secondary;

	nav {
		background: #fff;

		a {
			color: $linkColor;
		}

		.underline {
			border-color: $linkColor;
		}

		&:before {
			filter: invert(1);
		}
	}

	.lang_icon {
		color: #000;
	}
}

header {
	z-index: 100;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
}

$padding: 1rem;

nav {
	position: fixed;
	bottom: 0;
	left: 0;
	padding-right: $padding;
	padding-bottom: $padding;
	z-index: 10;
	width: 100vw;
	transition: background-color 1s;

	&:before {
		height: 30px;
		content: "";
		pointer-events: none;
		position: absolute;
		width: 100%;
		top: 1px;
		left: 0;
		transform: translateY(-100%);
		transition: filter 1s;
		background: linear-gradient(to top, rgba(#000, 1) 0%, rgba(#000, 0) 100%);
	}

	a {
		font-weight: bold;
		text-decoration: none;
		margin: 0 5px;
		padding: 0 10px;

		&:after {
			display: none;
		}
	}

	.underline {
		border-bottom: 2px solid #fff;
		position: absolute;
		bottom: #{$padding * 0.7};
		width: auto;
		transform: scaleX(1);
	}

	&.line_moves_left {
		.underline {
			transition: transform 0.3s, left 0.3s ease-out 0s, right 0.3s ease-out 0.2s;
		}
	}

	&.line_moves_right {
		.underline {
			transition: transform 0.3s, left 0.3s ease-out 0.2s, right 0.3s ease-out 0s;
		}
	}

	&.line_moves_hide {
		.underline {
			transform: scaleX(0);
			transition: transform 0.3s, left 0.3s ease-out 0s, right 0.3s ease-out 0s;
		}
	}
}

.themes {
	position: fixed;
	top: $padding;
	right: $padding;
}

.lang_icon {
	font-family: "Montserrat Black", "Arial Black";
	cursor: pointer;
	position: absolute;
	font-size: 1rem;
	top: 0;
	right: 2.2rem;
	height: 2em;
	padding-right: 0;
	padding-left: 0;
	width: 2em;
	appearance: none;
	border: 0 none;
	background: transparent none;
	color: #fff;
	transition: color 0.3s;
	transform: translateY(-25%);

	&:hover {
		color: $primary;
	}
}

.theme_icon {
	height: 1.5rem;
	width: 1.5rem;
	cursor: pointer;
	position: absolute;
	top: -4px;
	right: 0;
}

@media (min-width: $breakpoint-md-min) {
	body.body--dark,
	body.body--light {
		nav {
			position: relative;
			width: 100%;
			padding-right: 5%;
			background: transparent none;
		}
	}

	body.body--dark {
		header {
			background: linear-gradient(to bottom, rgba(#000, 1) 0%, rgba(#000, 0.9) 50%, rgba(#000, 0.7) 80%, rgba(#000, 0) 100%);
		}
	}

	body.body--light {
		header {
			background: linear-gradient(to bottom, rgba(#fff, 1) 0%, rgba(#fff, 0.9) 50%, rgba(#fff, 0.7) 80%, rgba(#fff, 0) 100%);
		}
	}
}
@media (min-width: $breakpoint-lg-min) {
	nav {
		padding-right: 0%;
	}
}
</style>

<style lang="scss">
.lang_icon {
	.q-btn__wrapper {
		padding: 0;
	}
}
</style>
