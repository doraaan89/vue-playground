<template>
	<component :is="isMobile ? 'LayoutDefault' : 'LayoutPC'" id="app">
		<main>
			<router-view />
		</main>
	</component>
</template>

<script>
import LayoutDefault from './components/layout/LayoutDefault.vue';
import LayoutPC from './components/layout/LayoutPC.vue';
export default {
	data() {
		return {};
	},
	components: {
		LayoutDefault,
		LayoutPC,
	},
	computed: {
		isMobile() {
			const minWidth = 1024;
			return window.innerWidth <= minWidth;
		},
	},
};
</script>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

main {
	height: calc(100vh - 76px - 44px);
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
