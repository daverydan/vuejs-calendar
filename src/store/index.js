import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentYear: 2018,
		currentMonth: 4,
		eventFormPosX: 0,
		eventFormPosY: 0
	}, // state

	mutations: {
		setCurrentMonth(state, payload) {
			state.currentMonth = payload;
		},
		setCurrentYear(state, payload) {
			state.currentYear = payload;
		},
		eventFormPosition(state, payload) {
			state.eventFormPosX = payload.x;
			state.eventFormPosY = payload.y;
		}
	}, // mutations
});