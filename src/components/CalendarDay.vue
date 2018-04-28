<template>
	<!-- day is a moment object, therefore it has methods available to it -->
	<div class="day">{{ day.format('D') }}</div>
</template>

<script>
	export default {
		props: ['day'],
		data() {
			return {

			}
		}
	}
</script>