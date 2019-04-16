import {GET_USERINFO} from './mutaions-types.js'
import api from '../service/getData'
import {getPromiseAction} from '../service/promiseUtils'
export default {

    async getUserInfo({
        commit,rootState
        
    }){
        let payload = {
            token: rootState.token
        }
        return getPromiseAction(api.loadUserInfo(payload),commit,GET_USERINFO)
    }
}