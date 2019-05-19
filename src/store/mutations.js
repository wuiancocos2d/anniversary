import * as types from './mutaions-types'
import {setStore} from '../config/mUtils'

export const mutations = {

    [types.RECORD_USERINFO](state, user) {
        setStore('userInfo',user)
        state.userInfo = user
    },
    [types.STAGE] (state, stage) {
        state.stage = stage
    }
}

export default mutations