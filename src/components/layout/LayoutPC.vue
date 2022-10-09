<template>
	<div>
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<script>
import Header from './pc/Header.vue';
import Footer from './pc/Footer.vue';
export default {
	name: 'LayoutPC',
	components: {
		Header,
		Footer,
	},
	methods: {
		console(e, i) {
			console.log(e, i);
		},
	},
};
</script>
