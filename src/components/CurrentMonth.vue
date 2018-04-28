<template>
	<div>{{ formattedDate }}</div>
</template>

<script>
	export default {
		computed: {
			formattedDate() {
				return this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D').format('MMMM YYYY');
			},
			month() { // get month from store
				return this.$store.state.currentMonth
			},
			year() { // get year from store
				return this.$store.state.currentYear
			}
		}
	}
</script>