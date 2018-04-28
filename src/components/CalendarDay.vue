<template>
	<div :class="classObject" @click="captureClick">{{ day.format('D') }}</div>
</template>

<script>
	export default {
		props: ['day'],
		
		computed: {
			classObject() {
				let today = this.day.isSame(this.$moment(), 'day');
				return {
					day: true,
					today: this.day.isSame(this.$moment(), 'day'),
					// same or before current date & !today
					past: this.day.isSameOrBefore(this.$moment(), 'day') && !today
				};
			}
		}, // computed

		methods: {
			captureClick(event) {
				this.$store.commit('eventFormPosition', { x: event.clientX, y: event.clientY })
			}
		}
	}
</script>