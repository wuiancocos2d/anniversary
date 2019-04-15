import {USER_LOGIN,GET_USERINFO} from './mutaions-types.js'
import {getUser} from '../service/getData'
export default {
    userLogin({commit},user) {
        commit(USER_LOGIN,user)
    },
    async getUserInfo({
        commit,
        state
    }){
        let res = await getUser()
        commit(GET_USERINFO, res)
    }
}