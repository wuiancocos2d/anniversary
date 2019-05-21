import * as types from './mutaions-types.js'
import { loadUserInfo, userLogin } from '../service/getData'
import { getPromiseAction } from '../service/promiseUtils'
import {router} from '../router'
export default {

    async getUserInfo({
        commit
    }) {
        return getPromiseAction(loadUserInfo(), commit, types.RECORD_USERINFO)
    },

    async login({ commit }, user) {
        return userLogin(user).then(
            res => {
                if (res !== undefined && res.code === 200) {
                    commit(types.USER_LOGIN, {status:true,message:null})
                    commit(types.RECORD_USERINFO,res.data)
                    router.push('/home')
                }
            },
            error => {
                console.log("error", error);
            }
        )
    }
}