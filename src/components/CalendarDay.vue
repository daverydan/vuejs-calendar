<template>
	<div :class="classObject" @click="captureClick">
		{{ day.format('D') }}
		<ul class="event-list">
			<li v-for="event in events">{{ event.desc }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['day'],
		
		computed: {
			events() {
				return this.$store.state.events.filter(event => event.date.isSame(this.day, 'day'));
			},

			classObject() {
				let eventFormDate = this.$store.state.eventFormDate;
				let eventFormActive = this.$store.state.eventFormActive;
				let today = this.day.isSame(this.$moment(), 'day');
				return {
					day: true,
					today: this.day.isSame(this.$moment(), 'day'),
					// same or before current date & !today
					past: this.day.isSameOrBefore(this.$moment(), 'day') && !today,
					active: eventFormDate.isSame(this.day, 'day') && eventFormActive
				};
			}
		}, // computed

		methods: {
			captureClick(event) {
				this.$store.commit('eventFormPosition', { x: event.clientX, y: event.clientY })
				this.$store.commit('eventFormActive', true);
				this.$store.commit('eventFormDate', this.day);
			}
		}
	}
</script>