import * as types from './mutaions-types'
import Vue from 'vue'
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
        Vue.set(state,'stage',stage)
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
    [types.USER_LIKE_LIST] (state, imgs) {
        state.uesrLikeList = imgs
    },
    [types.USER_STAGE] (state, stage, role) {
        if(!stage || !role) return 
        let userLevelCode,userStage 
        if(role.length > 2) {
            userLevelCode = 3
        }else if(role.length === 1) {
            userLevelCode = role[0]['id'] === 2 ? 2:1 
        }else {
            userLevelCode = 0
        }
        if(stage === 1) {
            userStage = 1
        }else if(stage === 2 ){
            if(userLevelCode === 1 || userLevelCode === 3) {
                userStage = 2
            }else {
                userStage = 1
            }
        }else if(stage === 3) {
            userStage = 3
        }else if(stage === 4) {
            if(userLevelCode === 2 || userLevelCode === 3) {
                userStage = 3
            }
        }else if(stage === 5) {
            userStage = 5
        }
        state.userStage = userStage
    },
    [types.SET_USER_STAGE] (state,userStage) {
        state.userStage = userStage
    }
}

export default mutations