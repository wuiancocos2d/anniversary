import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import {stageCode} from '../config/config'
Vue.use(Vuex)


const state = {
	userInfo: {},
	stage: 0,
	loginStatus: {
		status: false,
		message: null
	},
	userId: null,
	userStage: stageCode.stopuload,
	userUploads: [],
	uesrLikeList: []
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})