import * as types from './mutaions-types'
import {setStore} from '../config/mUtils'

export const mutations = {
    [types.USER_LOGIN](state, data) {
        state.userInfor.name = data.name
        localStorage.setItem('userInfo',JSON.stringify({'name':data.name}))
    },
    [types.RECORD_USERINFO](state, info) {
        state.userInfor = info;
        state.login = true;
        setStore('user_name', info.userName);
    }
}

export default mutations