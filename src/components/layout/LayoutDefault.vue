<template>
	<div>
		<Header />
		<slot />
		<Footer @test="console($event, $event.target)" />
	</div>
</template>

<script>
import Header from './common/Header.vue';
import Footer from './common/Footer.vue';
export default {
	name: 'LayoutDefault',
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
