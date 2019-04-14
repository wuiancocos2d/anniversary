import * as types from './mutaions-types'

export const mutations = {
    [types.USER_LOGIN](state, data) {
        state.userInfor.name = data.name
        localStorage.setItem('userInfo',JSON.stringify({'name':data.name}))
    }
}

export default mutations