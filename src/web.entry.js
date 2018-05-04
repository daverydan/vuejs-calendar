import Vue from 'vue';
import moment from 'moment-timezone';
import store from './store';

import './style.scss';

// Components
import App from './components/App.vue';

moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

let events = window.__INITIAL_STATE__.map(event => {
	return {
		desc: event.desc,
		date: moment(event.date)
	}
});

// initialState is empty {}, merge in the state in store, override with events 
let initialState = Object.assign({}, store.state, { events });
// console.log(initialState);
store.replaceState(initialState);

new Vue({
  el: '#app',
  
  store,
  
  components: { App },
  
  data: { moment }
});
