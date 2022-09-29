<template>
	<div>
		<Header />
		<slot />
		<Footer />
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
};
</script>
