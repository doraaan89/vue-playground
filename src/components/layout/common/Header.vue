<template>
	<header id="header">
		<nav>
			<!-- <router-link to="/">Home</router-link> | -->
			<!-- <router-link to="/about">About</router-link> -->
			<router-link
				v-for="(path, i) in routes"
				:key="`${path}${i}`"
				:to="path.path"
			>
				{{ path.name }}
			</router-link>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			routes: this.$router.options.routes,
		};
	},
	mounted() {
		console.log(this.routes);
	},
};
</script>
<<<<<<< HEAD

<style lang="scss">
#header {
	min-height: 2.5rem;
	nav {
		a {
			& + a {
				margin-left: 1rem;
			}
		}
	}
}
</style>
=======
>>>>>>> parent of 4ecbb85 (reset css 적용)
