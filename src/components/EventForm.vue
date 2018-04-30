<template>
	<div id="event-form" :class="{ active: active }" :style="{ top: top, left: left }">
		<h4>Add an event</h4>
		<div class="text">
			<input v-focus type="text" v-model="desc" @keyup.enter="create" placeholder="Dinner at Poncho's">
		</div>
		<div class="buttons">
			<button @click="create">Create</button>
		</div>
		<button id="close-button" @click="close">&#10005</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				desc: ''
			}
		},
		computed: {
			active() {
				return this.$store.state.eventFormActive;
			},
			top() {
				return this.$store.state.eventFormPosY + 'px';
			},
			left() {
				return `${this.$store.state.eventFormPosX}px`;
			}
		}, // computed

		methods: {
			close() {
				this.$store.commit('eventFormActive', false);
			},
			create() {
				if (!this.desc) return;
				this.$store.commit('addEvent', this.desc);
				this.desc = '';
				this.$store.commit('eventFormActive', false);
			}
		},

		directives: {
			focus: {
				update(el) {
					// console.debug('update');
					el.focus();
				}
			}
		}
	}
</script>