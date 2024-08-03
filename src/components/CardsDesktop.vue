<template>
	<div class="col col-12 col-md-6">
		<div :class="['cards', `qty_${cards.length}`, { loaded: cardsLoaded }, { transitioning: cardsTransitioning }]">
			<img
				:src="card_horror.src"
				:class="['card horror', `order_${card_horror.order}`, { current: card_horror.order === cardsQty }]"
				ref="card_horror"
				@click="makeTopCard('horror')"
			/>
			<img
				:src="card_quantum.src"
				:class="['card quantum', `order_${card_quantum.order}`, { current: card_quantum.order === cardsQty }]"
				ref="card_quantum"
				@click="makeTopCard('quantum')"
			/>
			<img
				:src="card_soldier.src"
				:class="['card soldier', `order_${card_soldier.order}`, { current: card_soldier.order === cardsQty }]"
				ref="card_soldier"
				@click="makeTopCard('soldier')"
			/>
			<img
				:src="card_wizard.src"
				:class="['card wizard', `order_${card_wizard.order}`, { current: card_wizard.order === cardsQty }]"
				ref="card_wizard"
				@click="makeTopCard('wizard')"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "CardsDesktop",
	props: {
		startingCards: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		cardsSpread: 30,
		cardsLoaded: false,
		cardsTransitioning: false,
		cards: [],
	}),
	computed: {
		card_horror() {
			if (this.cards.length) {
				return this.cards.find((c) => c.name === "horror");
			}
			return {};
		},
		card_quantum() {
			if (this.cards.length) {
				return this.cards.find((c) => c.name === "quantum");
			}
			return {};
		},
		card_soldier() {
			if (this.cards.length) {
				return this.cards.find((c) => c.name === "soldier");
			}
			return {};
		},
		card_wizard() {
			if (this.cards.length) {
				return this.cards.find((c) => c.name === "wizard");
			}
			return {};
		},
		cardsQty() {
			if (this.cards.length) {
				return this.cards.length;
			}
			return {};
		},
	},
	methods: {
		sortByOrder(a, b) {
			if (a.order > b.order) {
				return 1;
			}
			if (a.order < b.order) {
				return -1;
			}
			return 0;
		},
		getCardRotation(cardOrder) {
			// Don't ask how I got to this calculation...
			return -this.cardsSpread + ((this.cardsSpread * (cardOrder - 1)) / (this.cardsQty - 1)) * 2;
		},
		initCards() {
			this.cards = [...this.startingCards];
		},
		animTopCard(targetCardName, skipAnimation = false) {
			const topCard = this.$refs[`card_${targetCardName}`];
			const finalTransform = "rotate(10deg) translate(25%, 15%) scale(1.4)";
			const timeOut = skipAnimation ? 0 : 500;

			topCard.style.transform = `${finalTransform} translateY(-105%)`;

			setTimeout(() => {
				topCard.style.zIndex = 10;
				topCard.style.transform = finalTransform;
				this.cardsTransitioning = false;
			}, timeOut);
		},
		initCardsRotate() {
			let out = this.cards.sort(this.sortByOrder).map((card, inc) => {
				const cardRef = this.$refs[`card_${card.name}`];
				const rotate = this.getCardRotation(card.order);
				cardRef.style.transform = `translate(-50%, -20%) rotate(${rotate}deg)`;
				cardRef.style.zIndex = card.order;
				return card;
			});

			this.cards = [...out];

			this.$nextTick(() => {
				this.animTopCard("wizard", true);
				setTimeout(() => {
					this.cardsLoaded = true;
				}, 300);
			});
		},
		makeTopCard(targetCardName) {
			this.cardsTransitioning = true;
			this.currentSection = targetCardName;
			this.$emit("set-current-section", targetCardName);

			let inc = 1;
			const out = this.cards.sort(this.sortByOrder).map((card) => {
				if (card.name === targetCardName) {
					card.order = this.cardsQty;
				} else {
					const rotate = this.getCardRotation(inc);
					const cardRef = this.$refs[`card_${card.name}`];
					cardRef.style.transform = `translate(-50%, -20%) rotate(${rotate}deg)`;
					card.order = inc;
					setTimeout(() => {
						cardRef.style.zIndex = card.order;
					}, 400);
					inc++;
				}

				return card;
			});

			this.cards = [...out];

			this.$nextTick(() => {
				this.animTopCard(targetCardName);
			});
		},
	},
	mounted() {
		this.initCards();
		this.$nextTick(() => {
			this.initCardsRotate();
		});
	},
	watch: {},
};
</script>

<style lang="scss" scoped>
@keyframes wobble {
	0% {
		bottom: -18%;
	}
	100% {
		bottom: -22%;
	}
}

.cards {
	position: relative;
	height: 60vh;
	max-height: 50vw;
	width: 100%;
	opacity: 0;
	right: calc(min(10vw, 1000px));
	transition: opacity 0.3s ease-out 0s;

	&.loaded {
		opacity: 1;

		.card {
			transition: box-shadow 0.3s, transform 0.4s ease-in-out 0.2s;

			&.current {
				pointer-events: none;
				transition-delay: 0s;
				animation: 2s ease-in-out 0s infinite alternate wobble;
			}
		}
	}
	&.transitioning {
		.card {
			pointer-events: none;
		}
	}
}

.card {
	position: absolute;
	object-fit: contain;
	max-width: 100%;
	max-height: 100%;
	bottom: -20%;
	left: 50%;
	transform-origin: center bottom;
	cursor: pointer;
	box-shadow: 4px 4px 10px #000;
	border-radius: 6px;
	transform: translate(-50%, -20%) rotate(0deg);
	z-index: 0;
	user-select: none;

	&:hover {
		box-shadow: 0 0 30px #ff0, 0 0 30px #ff0;
	}
}

@media (orientation:portrait) {
	.cards{height:30vh;margin-bottom:calc(min(40px, 4vw));}
}

@media (min-width: $breakpoint-sm-min) {
	.card {
		border-radius: calc(min(14px, 0.8vw));
	}
}
@media (min-width: $breakpoint-md-min) {
	.cards {
		max-height: 20vw;
		right: calc(min(5vw, 1000px));
	}
}
@media (min-width: 2000px) {
	.cards {
		max-height: 370px;
	}
}
</style>

