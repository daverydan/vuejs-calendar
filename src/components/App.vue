<template>
	<div>
		<div v-for="day in days">{{ day }}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				month: 5,
				year: 2017
			};
		},
		created() {
			// console.log(this.$moment);
		},
		computed: {
			days() {
				// Generating all days in current month
				let days = [];
				let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
				do {
					days.push(currentDay);
					currentDay = this.$moment(currentDay).add(1, 'days');
				} while((currentDay.month() + 1) === this.month);

				// get first day in days array
				currentDay = this.$moment(days[0]);
				const SUNDAY = 0;
				const MONDAY = 1;

				if (currentDay.day() !== MONDAY) {
					// Add previous days to start
					do {
						currentDay = this.$moment(currentDay).subtract(1, 'days');
						days.unshift(currentDay);
					} while(currentDay.day() !== MONDAY);
				}

				if (currentDay.day() !== SUNDAY) {
					// Add days to end of month
					currentDay = this.$moment(days[days.length - 1]);
					do {
						currentDay = this.$moment(currentDay).add(1, 'days');
						days.push(currentDay);
					} while((currentDay.day()) !== SUNDAY);
				}

				return days;
			}
		}
	}
</script>