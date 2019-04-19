import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import {Message,Icon} from 'ant-design-vue'
import "./mock"
Vue.config.productionTip = false

Vue.prototype.$message = Message
Vue.prototype.$icon = Icon

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
