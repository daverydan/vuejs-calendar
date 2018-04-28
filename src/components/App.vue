<template>
	<div>{{ msg }}</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'Hello Danny',
			};
		},
		created() {
			console.log(this.$moment);
		}
	}
</script>