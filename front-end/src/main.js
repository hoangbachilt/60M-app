import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/Store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
