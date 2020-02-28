import Vue from 'vue';
import moment from 'moment-timezone';

moment().tz("America/Manaus").format();

Vue.prototype.$moment = moment;