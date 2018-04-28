import Vue from 'vue';
import moment from 'moment-timezone';

import './style.scss';

// Components
import App from './components/App.vue';

moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });
new Vue({
  el: '#app',
  components: { App },
  data: {
  	moment
  }
});
