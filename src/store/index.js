import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)


const state = {
    userInfo: {
		userName : '',
		userId: null,
		authority: false,
		},
		stage: 0
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})