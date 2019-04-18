import * as types from './mutaions-types'
import {setStore} from '../config/mUtils'

export const mutations = {

    [types.RECORD_USERINFO](state, user) {
        console.log('mutaions',user)
        setStore('userInfo',user)
        state.userInfo = user
    }
}

export default mutations