import * as types from './mutaions-types'
import { setStore ,removeStore} from '../config/mUtils'

export const mutations = {

    [types.RECORD_USERID](state, userId) {
        setStore('userId', userId)
        state.userId = userId
    },
    [types.RECORD_USERINFO](state,userInfo) {
        state.userInfo = userInfo
        setStore('userId', userInfo.userNo)
        state.loginStatus.status = true
    },
    [types.STAGE](state, stage) {
        state.stage = stage
    },
    [types.USER_LOGIN](state, { status, message }) {
        state.loginStatus.status = status
        state.loginStatus.message = message
    },
    [types.USER_LOGOUT](state){
        removeStore('userId')
        state.loginStatus.status = false
        state.userInfo = {}
    }
}

export default mutations