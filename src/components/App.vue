<template>
	<div>
		<div id="header">
			<div>
				<h1>Vue.js Calendar</h1>
			</div>
			<div>
				<current-month></current-month>
			</div>
		</div>
		<div id="day-bar">
			<div>Mon</div>	
			<div>Tue</div>	
			<div>Wed</div>	
			<div>Thu</div>	
			<div>Fri</div>	
			<div>Sat</div>	
			<div>Sun</div>
		</div>

		<div id="calendar">
			<div v-for="week in weeks" class="calendar-week">
				<calendar-day v-for="day in week" :day="day"></calendar-day>
			</div>
		</div>
	</div>
</template>

<script>
	import CalendarDay from './CalendarDay.vue';
	import CurrentMonth from './CurrentMonth.vue';

	export default {
		components: { CalendarDay, CurrentMonth },

		computed: {
			month() { // get month from store
				return this.$store.state.currentMonth
			},
			year() { // get year from store
				return this.$store.state.currentYear
			},
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
			},

			weeks() {
				// multidimensional array
				let weeks = [];
				let week = [];
				// iterate over every day of this.days
				// alias an individual day with let day
				for (let day of this.days) {
					week.push(day);
					if (week.length === 7) {
						weeks.push(week);
						week = [];
					}
				}
				return weeks;
			}
		}
	}
</script>