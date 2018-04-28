<template>
	<!-- day is a moment object, therefore it has methods available to it -->
	<!-- my attempt
	 <div class="{ 'day': true, 'today': day === today }">{{ day.format('D') }}</div> -->
	<div :class="classObject">{{ day.format('D') }}</div>
</template>

<script>
	export default {
		props: ['day'],
		data() {
			return {
				// today: this.day.isSame(this.$moment(), 'day')
			}
		},
		computed: {
			classObject() {
				return {
					day: true,
					today: this.day.isSame(this.$moment(), 'day')
				};
			}
		}
	}
</script>