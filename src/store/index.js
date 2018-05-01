import Vue from 'vue';
import moment from 'moment-timezone'
import Axios from 'axios';
import Vuex from 'vuex';

moment.tz.setDefault('UTC');
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentYear: 2018,
		currentMonth: 4,
		eventFormPosX: 0,
		eventFormPosY: 0,
		eventFormActive: false,
		events: [
			{ desc: 'Random event 1', date: moment('2018-04-29', 'YYYY-MM_DD') },
			{ desc: 'Random event 2', date: moment('2018-04-30', 'YYYY-MM_DD') },
			{ desc: 'Random event 3', date: moment('2018-05-01', 'YYYY-MM_DD') }
		],
		eventFormDate: moment()
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
		},
		eventFormActive(state, payload) {
			state.eventFormActive = payload;
		},
		addEvent(state, payload) {
			state.events.push(payload);
		},
		eventFormDate(state, payload) {
			state.eventFormDate = payload;
		}
	}, // mutations

	actions: {
		// context = contains everything in the store
		addEvent(context, payload) {
			return new Promise((resolve, reject) => {
				// console.log(context);
				let obj = {
					desc: payload,
					date: context.state.eventFormDate
				};
				Axios.post('/add_event', obj).then(response => {
					// console.log(response);
					if (response.status === 200) {
						context.commit('addEvent', obj);
						resolve();
					} else {
						reject();
					}
				});
			});
		}
	}, // actions
});