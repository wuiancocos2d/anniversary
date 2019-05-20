import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import {Message, Modal} from 'ant-design-vue'
import "./mock"
Vue.config.productionTip = false

Vue.prototype.$message = Message
Vue.prototype.$info = Modal.info
Vue.prototype.$confirm = Modal.confirm
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
