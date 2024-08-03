<template>
	<q-page>
		<Backgrounds />
		<div class="page_content row q-pa-xl">
			<div class="col">
				<div class="row">
					<h1>{{ $t("personal.who_am_i") }}</h1>
				</div>
				<div class="row">
					<CardsDesktop :starting-cards="cards" @set-current-section="setCurrentSection($event)" />
					<div class="col col-12 col-md-6" style="position: relative">
						<div :class="['card_description', 'horror', { active: currentSection === 'horror' }]" v-html="$t(`personal.text.horror`)"></div>
						<div :class="['card_description', 'quantum', { active: currentSection === 'quantum' }]" v-html="$t(`personal.text.quantum`)"></div>
						<div :class="['card_description', 'soldier', { active: currentSection === 'soldier' }]" v-html="$t(`personal.text.soldier`)"></div>
						<div :class="['card_description', 'wizard', { active: currentSection === 'wizard' }]" v-html="$t(`personal.text.wizard`)"></div>
					</div>
				</div>
			</div>
		</div>
	</q-page>
</template>

<script>
import Backgrounds from "../components/PersonalBackgrounds.vue";
import CardsDesktop from "../components/CardsDesktop.vue";

import card_horror from "../img/card_horror.webp";
import card_quantum from "../img/card_quantum.webp";
import card_soldier from "../img/card_soldier.webp";
import card_wizard from "../img/card_wizard.webp";

export default {
	name: "PagePersonal",
	components: { Backgrounds, CardsDesktop },
	data: () => ({
		cards: [
			{ order: 1, name: "horror", src: card_horror },
			{ order: 2, name: "quantum", src: card_quantum },
			{ order: 3, name: "soldier", src: card_soldier },
			{ order: 4, name: "wizard", src: card_wizard },
		],
		currentSection: "wizard",
	}),
	computed: {},
	methods: {
		setCurrentSection(section) {
			this.currentSection = section;
		},
	},
	mounted() {},
};
</script>

<style lang="scss" scoped>
body.body--dark {
	background: #000;
}

.q-page {
	min-height: 120vh;
	display: block;

	& > .row {
		z-index: 10;
		position: relative;
	}
}

h1 {
	margin-bottom: 100px;
}

.card_description {
	display: block;
	opacity: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	transition: opacity 0.8s ease-out;
	left: 0;
	top: 0;
	padding-top: calc(max(120px, 20vw));

	&.active {
		position: relative;
		opacity: 1;
		height: auto;
	}
}

@media (orientation: portrait) {
	h1 {
		margin-bottom: 60px;
	}
}

@media (min-width: $breakpoint-sm-min) {
}

@media (min-width: $breakpoint-md-min) {
	.card_description {
		padding-top: 0;
	}
}
</style>

<style lang="scss">
.card_description {
	.subtitle {
		margin-top: 0;
	}
	em {
		font-style: normal;
		transition: color 0.6s;
	}
	i {
		color: inherit;
	}
}
body.body--dark {
	.card_description {
		em {
			color: lighten($primary, 20);
		}
	}
}
body.body--light {
	.card_description {
		em {
			color: darken($secondary, 20);
		}
	}
}
</style>
