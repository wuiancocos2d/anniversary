import * as types from './mutaions-types'
import { setStore ,removeStore} from '../config/mUtils'

export const mutations = {

    [types.RECORD_USERID](state, userId) {
        setStore('userId', userId)
        state.userId = userId
    },
    [types.RECORD_USERINFO](state,userInfo) {
        state.userInfo = userInfo
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
    },
    [types.USER_UPLOAD] (state,resourceObj) {
        state.userInfo.resource.push(resourceObj)
    },
    [types.USER_DELETE] (state,resourceId) {
        const resource = state.userInfo.resource
        for(let i = 0; i< resource.length; i++) {
            if(resource[i].id === resourceId) {
                state.userInfo.resource.splice(i,1)
            }
        }
    },
    [types.USER_UPDATE] (state,imgInfo) {
        const resource = state.userInfo.resource
        for(let i = 0; i< resource.length; i++) {
            if(resource[i].id === imgInfo.id) {
                const img = state.userInfo.resource[i]
                img.resourceTitle = imgInfo.resourceTitle
                img.resourceContent = imgInfo.resourceContent
            }
        }
    },
    [types.USER_IMAGES] (state, imgs) {
        state.userUploads = imgs
    },
}

export default mutations