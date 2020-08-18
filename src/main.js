import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueGtag from 'vue-gtag'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: 'UA-175778634-1' }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
