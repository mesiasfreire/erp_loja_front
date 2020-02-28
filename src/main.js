import Vue from 'vue'
import App from './App.vue'
import router from './router'


// import router from './router'
// import store from './store'
import vuetify from './plugins/vuetify';

import { createProvider } from './plugins/vue-apollo'


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');