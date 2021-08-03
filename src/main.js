import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Enable access for store testing with cypress
if (window.Cypress) {
  window.__store__ = store
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
