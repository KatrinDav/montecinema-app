import Vue from 'vue'
import App from './App.vue'

import router from '@/router';
import VueRouter from 'vue-router';
import store from './store';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false

Vue.use(VueMeta);
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
