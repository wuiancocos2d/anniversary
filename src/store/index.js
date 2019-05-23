import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)


const state = {
	userInfo: {
		"userNo": 0,
		"userNm": "",
		"pwd": null,
		"jobTitle": "",
		"department": "",
		"location": "",
		"division": "",
		"emailAddrs": "",
		"busnPhone": "",
		"updateDt": "",
		"birthDay": null,
		"userStatus": null
	},
	stage: 0,
	loginStatus: {
		status: false,
		message: null
	},
	userId: null
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})