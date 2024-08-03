<template>
	<div :class="['project', 'flex', { invert: invert }]">
		<div class="row items-start q-col-gutter-x-xl">
			<div class="col col-12 col-md-6 q-mb-md">
				<Screenshots :list="screenshots" :hide-desktop="hideDesktop" :hide-mobile="hideMobile" :hide-dialog="dialog" />
			</div>
			<div class="col col-12 col-md-6">
				<slot name="short" />
				<p class="ctas">
					<q-btn type="a" color="light-blue" class="q-mr-lg glossy" outline icon="info" @click="dialog = true" target="_blank" label="Details" />
					<q-btn type="a" color="light-blue" class="glossy" outline icon="open_in_new" :href="liveURL" target="_blank" :label="$t('view_live')" />
				</p>
			</div>
			<div class="col-12">
				<slot name="details" />
			</div>
		</div>
		<q-dialog v-model="dialog" transition-show="rotate" transition-hide="rotate">
			<q-card class="dialog_card">
				<q-card-section class="card_section_screenshots q-mx-auto q-mb-xl">
					<Screenshots :list="screenshots" :hide-desktop="hideDesktop" :hide-mobile="hideMobile" />
				</q-card-section>

				<q-card-section class="q-pt-none">
					<p v-for="n in 15" :key="n">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
						perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
					</p>
				</q-card-section>
			</q-card>
		</q-dialog>
	</div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";

import Screenshots from "./WorkProjectScreenshots.vue";

const { id, invert, hideDesktop, hideMobile, liveURL } = defineProps({
	id: { type: String, default: "" },
	invert: Boolean,
	hideDesktop: Boolean,
	hideMobile: Boolean,
	liveURL: { type: String, default: "" },
});

const screenshots = ref({ desktop: [], mobile: [] });
const dialog = ref(false);

function getScreenshots() {
	for (let x = 1; x <= 9; x++) {
		try {
			const d = require(`../img/screenshots/${this.id}_0${x}_desktop.webp`);
			this.screenshots.desktop.push(d);
		} catch (e) {
			if (this.screenshots.desktop.length === 0) {
				console.log("No Desktop screenshot available for project", this.id);
				return false;
			}
		}

		try {
			const m = require(`../img/screenshots/${this.id}_0${x}_mobile.webp`);
			this.screenshots.mobile.push(m);
		} catch (e) {
			if (this.screenshots.mobile.length === 0) {
				console.log("No Mobile screenshot available for project", this.id);
				return false;
			}
		}
	}
}

onMounted(() => {
	this.getScreenshots();
});
</script>

<style lang="scss" scoped>
.project {
	width: 100%;
	margin-top: 40px;
	margin-bottom: 40px;
	max-width: 100%;

	&.invert {
		& > .row {
			flex-flow: row-reverse wrap;
		}
	}

	& > .row {
		min-width: 100%;
	}

	.col {
		position: relative;
	}

	ul {
		padding-left: 1em;
	}

	.icon_tech {
		height: 2.5rem;
		width: 3rem;
		margin: 0 0.4rem;

		&.wide {
			width: 5rem;
		}
	}
	.ctas {
		margin-top: 2rem;
	}
}

.dialog_card {
	overflow-x: hidden;
	max-width: 80vw;
}

.card_section_screenshots {
	max-width: 500px;
}
</style>
