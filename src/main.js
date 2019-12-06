import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from 'vuex'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
