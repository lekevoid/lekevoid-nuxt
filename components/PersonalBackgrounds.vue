<template>
	<div class="bgs">
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="10000">
			<div class="bg stars" v-if="theme === 'dark'">
				<div v-for="num in numberOfStars" class="star s30" :id="`star_${num}`" :ref="`star_${num}`" :key="`star_${num}`"></div>
			</div>
		</transition>
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear :duration="10000">
			<div class="bg sky" v-if="theme === 'light'"></div>
		</transition>
		<div class="bg mountains">
			<img v-if="theme === 'dark'" :src="bg_mountains_dark" />
			<img v-if="theme === 'light'" :src="bg_mountains_light" />
		</div>
		<div class="bg black"></div>
	</div>
</template>

<script>
import bg_mountains_dark from "../img/bg_mountains_dark.svg";
import bg_mountains_light from "../img/bg_mountains_light.svg";

export default {
	name: "PersonalBackgrounds",
	props: {},
	data: () => ({
		bg_mountains_dark: bg_mountains_dark,
		bg_mountains_light: bg_mountains_light,

		numberOfStars: 30,
		starSizes: ["small", "med", "big"],
		starSkews: ["s30", "s40"],
		lastChosenStars: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],

		skyAnimation: null,
	}),
	computed: {
		theme() {
			return this.$q.dark.isActive ? "dark" : "light";
		},
	},
	methods: {
		resetStar(num) {
			const chosenStar = this.$refs[`star_${num}`][0];
			if (chosenStar) {
				chosenStar.className = "star";
			}
		},
		animateStars() {
			const chosenStarNum = Math.ceil(Math.random() * this.numberOfStars);
			if (!this.lastChosenStars.includes(chosenStarNum)) {
				let updateChosenStars = [...this.lastChosenStars, chosenStarNum];
				this.lastChosenStars = updateChosenStars.slice(1);
				const chosenStar = this.$refs[`star_${chosenStarNum}`][0];

				if (chosenStar) {
					const randomPosLeft = Math.random() * 100;
					const randomPosTop = Math.random() * 100;
					const randomAnimDuration = Math.random();
					const randomOpacity = Math.random() * (2 / 3);
					const randomSize = Math.floor(Math.random() * this.starSizes.length);
					const randomSkew = Math.floor(Math.random() * this.starSkews.length);

					chosenStar.style.left = `${randomPosLeft}vw`;
					chosenStar.style.top = `${randomPosTop}vh`;
					chosenStar.style.animationDuration = `${randomAnimDuration}s`;
					chosenStar.style.animationDuration = `${randomAnimDuration}s`;
					chosenStar.style.opacity = `${randomOpacity}`;

					chosenStar.classList.add(this.starSizes[randomSize]);
					chosenStar.classList.add(this.starSkews[randomSkew]);

					setTimeout(() => this.resetStar(chosenStarNum), 1000);
				}
			}
		},
		animateClouds() {
			console.log("fucking clouds !!!");
		},
		initAnimations() {
			if (this.theme === "dark") {
				clearInterval(this.skyAnimation);
				this.skyAnimation = setInterval(this.animateStars, 50);
			}
			if (this.theme === "light") {
				clearInterval(this.skyAnimation);
				// this.skyAnimation = setInterval(this.animateClouds, 50);
			}
		},
	},
	created() {
		this.initAnimations();
	},
	watch: {
		theme(t) {
			this.initAnimations();
		},
	},
};
</script>

<style lang="scss" scoped>
@keyframes starShineSmall {
	0% {
		transform: scale(0) rotate(0deg);
	}
	50% {
		transform: scale(0.3) rotate(300deg);
	}
	100% {
		transform: scale(0) rotate(600deg);
	}
}

@keyframes starShineMed {
	0% {
		transform: scale(0) rotate(0deg);
	}
	50% {
		transform: scale(0.6) rotate(300deg);
	}
	100% {
		transform: scale(0) rotate(600deg);
	}
}

@keyframes starShineBig {
	0% {
		transform: scale(0) rotate(0deg);
	}
	50% {
		transform: scale(0.9) rotate(300deg);
	}
	100% {
		transform: scale(0) rotate(600deg);
	}
}

body.body--light {
	.bg {
		&.mountains {
		}
		&.black {
			background-color: #8daacc;
			z-index: 3;
		}
	}
}

.bgs {
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	display: flex;
	flex-flow: column nowrap;
}

.bg {
	position: relative;
	left: 0;
	height: auto;
	width: 100vw;
	z-index: 1;

	&.stars {
		z-index: 2;
		height: 100vh;
		position: fixed;
		left: 0;
		width: 100%;
		content: "";
		display: block;
		height: 100%;
		top: 0;
		z-index: 1;

		&:before {
			background: radial-gradient(ellipse at center bottom, #006 0%, #202 70%, #000 90%);
			position: absolute;
			left: 0;
			z-index: 1;
			top: 0;
			width: 100%;
			height: 100%;
			content: "";
		}

		&:after {
			background: url("../img/bg_stars.webp");
			position: absolute;
			left: 0;
			z-index: 2;
			top: 0;
			width: 100%;
			height: 100%;
			content: "";
			opacity: 0.2;
		}
	}

	&.sky {
		background: radial-gradient(ellipse at center bottom, #ddf 0%, #8cf 80%);
		z-index: 2;
		height: 100vh;
		position: fixed;
		left: 0;
		width: 100%;
		content: "";
		display: block;
		height: 100%;
		top: 0;
		z-index: 1;
	}

	&.mountains {
		height: auto;
		flex: 0 0 auto;
		z-index: 2;
		padding-top: 40vh;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-end;

		img {
			object-fit: cover;
			object-position: center bottom;
			height: auto;
			width: 100%;
		}
	}

	&.black {
		height: auto;
		flex: 1 1 100%;
		z-index: 2;
		margin-top: -10px;
		background-color: #000;
		z-index: 1;
	}

	&.depths {
		z-index: 2;
		bottom: 0;
		display: none;
	}
}

.star {
	$starSize: 1vw;
	$starColor: #ddf;
	height: $starSize;
	width: $starSize;
	position: absolute;
	left: 10px;
	top: 10px;
	animation-delay: 0s;
	animation-iteration-count: 1;
	transform: scale(0);
	z-index: 1;

	&.small {
		animation-name: starShineSmall;
	}

	&.med {
		animation-name: starShineMed;
	}

	&.big {
		animation-name: starShineBig;
	}

	&:before {
		height: $starSize;
		width: $starSize;
		background-color: $starColor;
		position: absolute;
		left: 50%;
		top: 50%;
		content: "";
		display: block;
	}

	&:after {
		height: $starSize;
		width: $starSize;
		background-color: $starColor;
		position: absolute;
		left: 50%;
		top: 50%;
		content: "";
		display: block;
	}

	&.s30 {
		&:before {
			transform: translate(-50%, -50%) skew(30deg, 30deg);
		}
		&:after {
			transform: translate(-50%, -50%) rotate(90deg) skew(30deg, 30deg);
		}
	}

	&.s40 {
		&:before {
			transform: translate(-50%, -50%) skew(40deg, 40deg);
		}
		&:after {
			transform: translate(-50%, -50%) rotate(90deg) skew(40deg, 40deg);
		}
	}
}
</style>
