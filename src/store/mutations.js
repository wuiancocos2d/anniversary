import * as types from './mutaions-types'
import {setStore} from '../config/mUtils'

export const mutations = {

    [types.RECORD_USERINFO](state, user) {
        setStore('userInfo',user)
        state.userInfo = user
    },
    [types.STAGE] (state, stage) {
        state.stage = stage
    },
    [types.USER_LOGIN] (state,{status,message}) {
        state.loginStatus.status = status
        state.loginStatus.message = message
    }
}

export default mutations