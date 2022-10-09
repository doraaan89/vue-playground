<template>
	<footer id="footer">
		{{ footerText }}
		<button @click="test">emit test</button>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			footerText: 'Footer Area',
		};
	},
	methods: {
		test() {
			this.$emit('test', this.footerText);
		},
	},
};
</script>
