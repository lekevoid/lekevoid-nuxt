<template>
	<NuxtLayout name="default">
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
				<div class="col who_are_you align-start">
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
						<!-- <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="600"> -->
						<div class="col" v-if="user_is === 'partner'" v-html="$t('work.client_description')"></div>
						<div class="col" v-if="user_is === 'recruiter'" v-html="$t('work.recruiter_description')"></div>
						<div class="col" v-if="user_is === 'visitor'" v-html="$t('work.visitor_description')"></div>
						<!-- </transition> -->
					</div>
				</div>
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
				<!-- <div class="row what_i_did flex-center">
					<div class="col column no-wrap justify-center items-start text-left">
						<div class="overline" v-scroll-fire="scaleFromLeft"></div>
						<h2>{{ $t("what_ive_done") }}</h2>
						<Project id="broadsign">
							<template #short>
								<h3 class="title q-mt-none">
									<a href="https://broadsign.com" target="_blank" rel="noreferrer noopener">Broadsign</a>
								</h3>
								<p>An international digital signage company.</p>
								<p class="ctas">
									<q-btn
										type="a"
										color="primary"
										class="q-mr-lg"
										icon="info"
										:to="{ name: 'SingleProject', params: { project: 'broadsign' } }"
										target="_blank"
										label="Details"
									/>
									<q-btn type="a" color="primary" icon="open_in_new" href="https://broadsign.com" target="_blank" :label="$t('view_live')" />
								</p>
							</template>
						</Project>
						<Project id="gigi_retzo" invert>
							<template #short>
								<h3 class="title q-mt-none">
									<a href="https://gigiretzo.com" target="_blank" rel="noreferrer noopener">{{ $t("projects.gigi_retzo.title") }}</a>
								</h3>
								<p>{{ $t("projects.gigi_retzo.short_desc") }}</p>
								<p class="ctas">
									<q-btn
										type="a"
										color="primary"
										class="q-mr-lg"
										icon="info"
										:to="{ name: 'SingleProject', params: { project: 'gigi_retzo' } }"
										target="_blank"
										:label="$t('details')"
									/>
									<q-btn type="a" color="primary" icon="open_in_new" href="https://gigiretzo.com" target="_blank" :label="$t('view_live')" />
								</p>
							</template>
						</Project>
						<Project id="bokkle" hide-mobile>
							<template #short>
								<h3 class="title q-mt-none">
									<a href="https://bokkle.web.app" target="_blank" rel="noreferrer noopener">{{ $t("projects.bokkle.title") }}</a>
								</h3>
								<p>{{ $t("projects.bokkle.short_desc") }}</p>
								<p class="ctas">
									<q-btn
										type="a"
										color="primary"
										class="q-mr-lg"
										icon="info"
										:to="{ name: 'SingleProject', params: { project: 'bokkle' } }"
										target="_blank"
										label="Details"
									/>
									<q-btn type="a" color="primary" icon="open_in_new" href="https://bokkle.web.app" target="_blank" :label="$t('view_live')" />
								</p>
							</template>
						</Project>
					</div>
				</div> -->
			</div>
			<div class="col-md-1 col-lg-2"></div>
		</div>
	</NuxtLayout>
</template>

<script setup>
// import Project from "../components/Project.vue";

function getScrollPercent() {
	let h = document.documentElement,
		b = document.body,
		st = "scrollTop",
		sh = "scrollHeight";
	return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}
</script>

<style lang="scss"></style>
