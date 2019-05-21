import * as types from './mutaions-types.js'
import { loadUserInfo, userLogin } from '../service/getData'
import { getPromiseAction } from '../service/promiseUtils'
export default {

    async getUserInfo({
        commit
    }) {
        return getPromiseAction(loadUserInfo(), commit, types.RECORD_USERINFO)
    },

    async login({commit},user) {

        userLogin(user).then(
            res => {
                if(res.code === 200) {
                    commit(types.RECORD_USERINFO,res.data)
                }   
            },
            error => {
                console.log("error", error);
            }
        )
    }
}