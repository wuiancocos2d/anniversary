import * as types from './mutaions-types'
import { setStore ,removeStore} from '../config/mUtils'

export const mutations = {

    [types.RECORD_USERID](state, userId) {
        setStore('userId', userId)
        state.userId = userId
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
        state.userInfo = null
    }
}

export default mutations