import Vue from 'vue';
import moment from 'moment-timezone';
import Vuex from 'vuex';

import './style.scss';

// Components
import App from './components/App.vue';

moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

Vue.use(Vuex);
// my attempt
// Object.defineProperty(Vue.prototype, '$vuex', { get() { return this.$root.vuex } });

new Vue({
  el: '#app',
  components: { App },
  data: {
  	moment
  },
  store: {
	state: {
		currentYear: 2018,
		currentMonth: 4
	}
  },
  created() {
		// console.log(this.$moment);
		// console.log(this.$vuex);
	}
});
