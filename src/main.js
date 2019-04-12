import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import Axios from 'axios'
import {Message} from 'ant-design-vue'
Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.prototype.$message = Message
const token = localStorage.getItem('token')
if(token) {
  Vue.prototype.$http.defaults.header.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
