import * as types from './mutaions-types.js'
import { loadUserInfo, userLogin, getUserImages } from '../service/getData'
import router from '../router'
export default {

    async getUserInfo({
        commit
    }) {
        return loadUserInfo().then(
            res => {
                if (res !== undefined && res.code === 200) {
                    commit(types.USER_LOGIN, {status:true,message:null})
                    commit(types.RECORD_USERINFO,res.data)
                    commit(types.RECORD_USERID,res.data.userNo)
                    commit(types.USER_STAGE,res.data.stage.stageNo,res.data.role)
                }else { 
                    commit(types.USER_LOGOUT)
                    router.push('/login')
                }
            },
            error => {
                console.log("error", error);
            }
        )
    },

    async login({ commit }, user) {
        return userLogin(user).then(
            res => {
                if (res !== undefined && res.code === 200) {
                    commit(types.USER_LOGIN, {status:true,message:null})
                    commit(types.RECORD_USERINFO,res.data)
                    commit(types.RECORD_USERID,res.data.userNo)
                    commit(types.USER_STAGE,res.data.stage.stageNo,res.data.role)
                }
            },
            error => {
                console.log("error", error);
            }
        )
    },

    logout ({commit}) {
        commit(types.USER_LOGOUT)
        router.push('/login')
    },

    async syncUserImages({commit}) {
        return getUserImages().then(
            res => {
                if(res && res.data) {
                    commit(types.USER_IMAGES, res.data.resourceList)
                    commit(types.USER_LIKE_LIST,res.data.likeList)
                } 
            }
        )
    },

    setStage({commit},stage) {
        commit(types.STAGE,stage)
    },
    setUserStage({commit},stage) {
        commit(types.SET_USER_STAGE, stage)
    }
}