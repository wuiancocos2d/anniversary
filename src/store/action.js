import * as types from './mutaions-types.js'

export default {
    userLogin({commit},user) {
        commit(types.USER_LOGIN,user)
    },
}