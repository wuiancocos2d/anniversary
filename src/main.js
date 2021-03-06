import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import {Message, Modal} from 'ant-design-vue'
import {setCookie,getCookie,delCookie} from './config/mUtils'
import {stageCode} from './config/config'
import VueAnalytics from 'vue-analytics'

import "./mock" 
import FastClick from 'fastclick'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false

Vue.prototype.$message = Message
Vue.prototype.$info = Modal.info
Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$modal = Modal

Vue.prototype.setCookie = setCookie
Vue.prototype.getCookie = getCookie
Vue.prototype.delCookie = delCookie

Vue.prototype.$stageCode = stageCode

Vue.use(VueAnalytics, {
  id: 'UA-142140652-1',
  router,
  checkDuplicatedScript: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
