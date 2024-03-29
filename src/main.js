// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import VueStomp from 'vue-stomp'

Vue.use(VueStomp)
Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.material.registerTheme('default',{
    primary: {
        color: 'red',
        hue: 'A700'
    },
    accent: 'blue',
    warn: 'red',
    background: 'white'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
