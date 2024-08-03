<template>
	<NuxtLayout>
		<div class="page_content row">
			<div class="col-md-1 col-lg-2"></div>
			<div class="col">
				<div class="hero flex flex-center column no-wrap">
					<transition appear enter-active-class="animated fadeIn" :duration="1000">
						<div class="me q-mb-xl">
							<q-avatar>
								<q-img src="../img/kevin.webp" contain />
							</q-avatar>
						</div>
					</transition>
					<h1 class="flex column items-center q-mt-none">
						<span class="hi">{{ $t("hi") }}</span>
						<span class="kevin">Kevin.</span>
					</h1>
					<!-- <p>
						<q-btn color="purple" class="q-pl-lg" @click="console.log('hello')">
							<span class="wave"><span class="inner">👋</span></span>
							<span>{{ $t("hello_there") }}</span>
						</q-btn>
					</p> -->
				</div>
				<div class="row what_i_do flex-center q-mt-xl">
					<div class="col column no-wrap justify-center items-start text-left">
						<div class="overline" v-scroll-fire="scaleFromLeft"></div>
						<h2>{{ $t("what_i_do") }}</h2>
						<q-carousel
							v-model="whatIDoCarousel"
							transition-prev="scale"
							transition-next="scale"
							animated
							arrows
							infinite
							navigation
							autoplay="autoplay"
							control-type="outline"
							control-color="light-blue"
							class="full-width"
							style="height: 300px"
						>
							<q-carousel-slide name="style" class="column no-wrap flex-center">
								<q-icon name="keyboard" color="light-blue" size="56px" />
								<div class="q-mt-md text-center">
									<p>I turn <em>keystrokes</em> into things people can use.</p>
								</div>
							</q-carousel-slide>
							<q-carousel-slide name="tv" class="column no-wrap flex-center">
								<q-icon name="travel_explore" color="light-blue" size="56px" />
								<div class="q-mt-md text-center">
									<p>I have <em>no idea</em> what I'm doing, but I'll figure it out.</p>
								</div>
							</q-carousel-slide>
							<q-carousel-slide name="layers" class="column no-wrap flex-center">
								<q-icon name="favorite_border" color="light-blue" size="56px" />
								<div class="q-mt-md text-center"><p>I am what I am and that's all what I am.</p></div>
							</q-carousel-slide>
						</q-carousel>
					</div>
				</div>
				<!-- <div class="col who_are_you align-start">
					<div class="col col-12 column no-wrap justify-start items-start text-left">
						<div class="overline" v-scroll-fire="scaleFromLeft"></div>
						<div v-html="$t('work.intro')"></div>
						<p v-html="$t('before_we_talk_about_me')"></p>
						<div :class="['ctas row q-mt-lg items-start justify-center', { has_current: user_is }]" style="width: 100%">
							<q-btn
								color="primary"
								size="lg"
								outline
								glossy
								:class="['btn_icon', { current: user_is === 'partner' }]"
								@click="user_is = 'partner'"
							>
								<span class="icon">🤝</span>
								<span class="label">{{ $t("cta_client") }}</span>
								<span class="cancel" @click="emptyUser($event)">&times;</span>
							</q-btn>
							<q-btn
								color="primary"
								size="lg"
								outline
								glossy
								:class="['btn_icon', { current: user_is === 'recruiter' }]"
								@click="user_is = 'recruiter'"
							>
								<span class="icon">🕵️‍♀️</span>
								<span class="label">{{ $t("cta_recruiter") }}</span>
								<span class="cancel" @click="emptyUser($event)">&times;</span>
							</q-btn>
							<q-btn
								color="primary"
								size="lg"
								outline
								glossy
								:class="['btn_icon', { current: user_is === 'visitor' }]"
								@click="user_is = 'visitor'"
							>
								<img src="../img/derp.svg" class="icon" />
								<span class="label">{{ $t("cta_visitor") }}</span>
								<span class="cancel" @click="emptyUser($event)">&times;</span>
							</q-btn>
						</div>
					</div>
					<div class="col col-12">
						<transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="600">
							<div class="col" v-if="user_is === 'partner'" v-html="$t('work.client_description')"></div>
							<div class="col" v-if="user_is === 'recruiter'" v-html="$t('work.recruiter_description')"></div>
							<div class="col" v-if="user_is === 'visitor'" v-html="$t('work.visitor_description')"></div>
						</transition>
					</div>
				</div> -->
				<div class="row contact">
					<!-- <div class="col">
						<h2>I'd love to hear from you !</h2>
						<transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="600">
							<p v-if="formSubmitted">Thank you for reaching out !</p>
							<form class="q-my-xl" v-if="!formSubmitted" method="post" @submit="onSubmit" netlify>
								<q-input v-model="form.name" name="name" hint="What should I call you ?" outlined class="q-mb-md" />
								<q-input v-model="form.email" name="email" hint="Where can I reach you ?" type="email" outlined class="q-mb-md" />
								<q-input v-model="form.message" name="message" hint="What can I do for you ?" type="textarea" outlined class="q-mb-md" />
								<q-btn type="submit" icon="send" label="Submit" glossy @click="formSubmitted = true" />
							</form>
						</transition>
					</div> -->
				</div>
				<!-- <div class="row what_i_do flex-center">
					<div class="col column no-wrap justify-center items-end text-right">
						<div class="overline" v-scroll-fire="scaleFromRight"></div>
						<h2>{{ $t("what_i_do") }}</h2>
						<p>I find <em>solutions</em> and <em>develop</em> them.</p>
						<p>
							My aim is to connect you with the solution that works for you and your business. This is why I avoid attaching myself to a
							particular language, framework or tool. What matters is what will help you.
						</p>
					</div>
				</div> -->
				<div class="row what_i_did flex-center">
					<!-- <div class="col column no-wrap justify-center items-start text-left">
						<div class="overline" v-scroll-fire="scaleFromLeft"></div>
						<h2>{{ $t("what_ive_done") }}</h2>
						<Project id="broadsign" liveURL="https://broadsign.com">
							<template #short>
								<h3 class="title q-mt-none">
									<a href="https://broadsign.com" target="_blank" rel="noreferrer noopener">Broadsign</a>
								</h3>
								<p>An international digital signage company.</p>
							</template>
						</Project>
						<Project id="gigi_retzo" invert liveURL="https://gigiretzo.com">
							<template #short>
								<h3 class="title q-mt-none">
									<a href="https://gigiretzo.com" target="_blank" rel="noreferrer noopener">{{ $t("projects.gigi_retzo.title") }}</a>
								</h3>
								<p>{{ $t("projects.gigi_retzo.short_desc") }}</p>
							</template>
						</Project>
						<Project id="bokkle" hide-mobile liveURL="https://bokkle.web.app">
							<template #short>
								<h3 class="title q-mt-none">
									<a href="https://bokkle.web.app" target="_blank" rel="noreferrer noopener">{{ $t("projects.bokkle.title") }}</a>
								</h3>
								<p>{{ $t("projects.bokkle.short_desc") }}</p>
							</template>
						</Project>
					</div> -->
				</div>
			</div>
			<div class="col-md-1 col-lg-2"></div>
		</div>
	</NuxtLayout>
</template>

<script setup>
const user_is = ref(false);
const form = ref({ name: "", email: "", message: "" });
const formSubmitted = ref(false);
const whatIDoCarousel = ref("style");

const logo_firebase = computed(() => {
	return "";
	//return this.$q.dark.isActive ? logo_firebase_dark : logo_firebase_light;
});

function getScrollPercent() {
	let h = document.documentElement,
		b = document.body,
		st = "scrollTop",
		sh = "scrollHeight";
	return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

function adjustStarsPosition() {
	if (this.$refs["bg_stars"]) {
		this.$refs["bg_stars"].style.backgroundPositionY = `${this.getScrollPercent() * 2}%`;
	}
}

function scaleFromLeft(el) {
	if (el) {
		el.classList.add("from_left");
	}
}

function scaleFromRight(el) {
	if (el) {
		el.classList.add("from_right");
	}
}

function emptyUser(event) {
	event.preventDefault();
	this.user_is = false;
}

function onSubmit(evt) {
	evt.target.submit();
}
</script>

<style lang="scss">
@keyframes wave {
	0% {
		transform: rotate(8deg);
	}
	50% {
		transform: rotate(-8deg);
	}
	100% {
		transform: rotate(8deg);
	}
}

body {
	transition: background-color 1s;

	&.body--dark {
		.who_are_you {
			min-height: 100vh;
		}
	}
}

.div {
	padding-bottom: 100px;

	&.fadeOut {
		.hero {
			opacity: 0;
		}
	}
}

.hero {
	height: 80vh;
	margin-bottom: calc(max(20vh, 120px));
	padding-top: calc(min(120px, 20vh));
	padding-bottom: 0;

	.me {
		$photoSize: 50vmin;
		$photoMaxSize: 400px;
		border: 2px ridge #fff;
		max-height: $photoMaxSize;
		max-width: $photoMaxSize;
		border-radius: $photoMaxSize;
		overflow: hidden;
		flex: 0 0 $photoSize;
		width: $photoSize;
		height: $photoSize;

		.q-avatar,
		.q-avatar__content,
		.q-img {
			max-height: $photoMaxSize;
			max-width: $photoMaxSize;
			width: $photoSize;
			height: $photoSize;
			padding: 0;
			margin: 0;
			left: 0;
			top: 0;
		}
	}

	.hi {
		font-size: 0.6em;
		line-height: 100%;
	}

	.wave {
		font-size: 300%;
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(-50%, -20%);

		.inner {
			transform-origin: right bottom;
			position: relative;
			animation: wave 1s ease-in-out 0s infinite;
			display: block;
		}
	}
}

.overline {
	border-bottom: 3px solid $accent;
	transform: scaleX(0);
	width: 50%;
	max-width: 500px;

	&.from_left {
		transform-origin: left center;
		animation: scaleFromLeft 0.6s ease-out 0s 1 normal forwards running;
	}

	&.from_right {
		transform-origin: right center;
		animation: scaleFromRight 0.6s ease-out 0s 1 normal forwards running;
	}
}

.who_are_you {
	.ctas {
		position: relative;
	}
	& > .col {
		margin: 0;
	}

	.btn_icon {
		$transitionDuration: 0.4s;
		transition: opacity $transitionDuration ease-out 0s, max-width $transitionDuration ease-out 0s, max-height $transitionDuration ease-out 0s;
		max-height: 52px;
		width: 100%;
		flex: 0 0 100%;
		overflow: hidden;
		margin: 0 0 0.6em;

		.icon {
			margin-right: 0.4em;
			font-size: 1.4em;
		}

		.label {
			font-size: calc(clamp(14px, 2.8vw, 20px));
		}

		img {
			height: 1em;
			width: 1em;
		}

		&:active,
		&:focus {
			box-shadow: 0 0 4px #fff;
		}

		.cancel {
			color: #f00;
			font-size: 0em;
			transition: font-size $transitionDuration, margin $transitionDuration;
			margin: 0;
			background-color: rgba(#000, 0.01);
		}

		&.current {
			pointer-events: none;

			.cancel {
				pointer-events: all;
				font-size: 3em;
				margin-left: 0.4em;
			}
		}
	}

	.has_current {
		.btn_icon {
			max-height: 0px;
			opacity: 0;

			&.current {
				max-height: 52px;
				opacity: 1;
				max-width: 100%;
			}
		}
	}
}

.what_i_do {
	min-height: 100vh;
}

.contact {
	margin-top: 10rem;

	.q-form {
		transition: max-height 0.6s, margin 0.6s;
		overflow: hidden;
		max-height: 100vh;

		&.fadeOut {
			max-height: 0vh;
			margin: 0;
		}
	}
}

body.body--light {
	.hero .me {
		border-color: #aaa;
	}
}

@media (min-width: $breakpoint-sm-min) {
	.who_are_you {
		.ctas {
			flex-flow: row nowrap;
		}

		.btn_icon {
			flex: 0 0 auto;
			width: auto;
			height: auto;
			max-height: none;
			margin: 0 0.4em;
			max-width: 50%;

			.label {
				font-size: calc(clamp(14px, 2.2vw, 20px));
			}
		}

		.has_current {
			.btn_icon {
				max-width: 0%;
				opacity: 0;
				height: auto;
				max-height: none;

				&.current {
					height: auto;
					max-height: none;
					max-width: 50%;
					opacity: 1;
					margin: 0 auto;
				}
			}
		}

		/* .btn_icon {
			position: absolute;
			overflow: hidden;
			transition: opacity 0.3s ease-out 0s, max-width 0s ease-out 0.3s;
			max-height: 52px;
			transition-delay: 0.3s;
			left: 50%;
			top: 50%;

			&:nth-of-type(1) {
				transform: translate(-82%, -52%);
			}

			&:nth-of-type(2) {
				transform: translate(29%, -52%);
			}

			&:nth-of-type(3) {
				transform: translate(-109%, 52%);
			}

			&:nth-of-type(4) {
				transform: translate(-7%, 52%);
			}
		} */
	}
}

@media (min-width: $breakpoint-md-min) {
	.hero {
		height: 90vh;
		margin-bottom: 10vh;
		padding-top: calc(min(120px, 20vh));
		padding-bottom: 0;
	}
}
</style>
