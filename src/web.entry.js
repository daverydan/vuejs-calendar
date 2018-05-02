import Vue from 'vue';
import moment from 'moment-timezone';
import store from './store';

import './style.scss';

// Components
import App from './components/App.vue';

moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

let events = [
	{ desc: 'Random event 1', date: moment('2018-04-29', 'YYYY-MM_DD') },
	{ desc: 'Random event 2', date: moment('2018-04-30', 'YYYY-MM_DD') },
	{ desc: 'Random event 3', date: moment('2018-05-01', 'YYYY-MM_DD') }
];
// initialState is empty {}, merge in the state in store, override with events 
let initialState = Object.assign({}, store.state, { events });
console.log(initialState);
store.replaceState(initialState);

new Vue({
  el: '#app',
  
  store,
  
  components: { App },
  
  data: { moment }
});
