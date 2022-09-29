<template>
	<header id="header">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {};
	},
};
</script>

<style lang="scss">
#header {
	min-height: 2.5rem;
	margin-top: 1.5rem;
}
</style>
