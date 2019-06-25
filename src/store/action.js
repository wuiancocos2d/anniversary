import * as types from './mutaions-types.js'
import { loadUserInfo, userLogin, getUserImages, getUserLikeList } from '../service/getData'
import router from '../router'
import store from './index'
export default {

    async getUserInfo({
        commit
    }) {
        return loadUserInfo().then(
            res => {
                console.log('res loadinfo',res)
                if (res !== undefined && res.code === 200) {
                    store.dispatch('recordUser',res)
                } else {
                    commit(types.USER_LOGOUT)
                    router.push('/login')
                }
            },
            error => {
                console.log("error", error);
            }
        )
    },

    async login (user) {
        return userLogin(user).then(
            res => {
                if (res !== undefined && res.code === 200) {
                    store.dispatch('recordUser',res)
                }
            },
            error => {
                console.log("error", error);
            }
        )
    },

    recordUser({commit}, res) {
        commit(types.USER_LOGIN, { status: true, message: null })
        commit(types.RECORD_USERINFO, res.data)
        commit(types.RECORD_USERID, res.data.user.userNo)
        commit(types.USER_STAGE, {"stage":res.data.stage.stageNo, "role":res.data.role})
    },

    logout({ commit }) {
        commit(types.USER_LOGOUT)
        router.push('/login')
    },

    async syncUserImages({ commit }) {
        return getUserImages().then(
            res => {
                if (res && res.data) {
                    commit(types.USER_IMAGES, res.data.resourceList)
                }
            }
        )
    },

    async asyncUserLikeList({commit}) {
        return getUserLikeList().then(
            res => {
                if(res && res.data) {
                     commit(types.USER_LIKE_LIST,res.data[0])
                }
            }
        )
    },

    setStage({ commit }, stage) {
        commit(types.STAGE, stage)
    },
    setUserStage({ commit }, stage) {
        commit(types.SET_USER_STAGE, stage)
    },

}

 