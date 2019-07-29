import * as types from './mutaions-types'
import Vue from 'vue'
import { stageCode, userCode } from '../config/config'
import { setStore, removeStore } from '../config/mUtils'

export const mutations = {

    [types.RECORD_USERID](state, userId) {
        setStore('userId', userId)
        state.userId = userId
    },
    [types.RECORD_USERINFO](state, userInfo) {
        state.userInfo = userInfo
        state.loginStatus.status = true
    },
    [types.STAGE](state, stage) {
        Vue.set(state, 'stage', stage)
    },
    [types.USER_LOGIN](state, { status, message }) {
        state.loginStatus.status = status
        state.loginStatus.message = message
    },
    [types.USER_LOGOUT](state) {
        removeStore('userId')
        state.loginStatus.status = false
        state.userInfo = {}
    },
    [types.USER_UPLOAD](state, resourceObj) {
        state.userInfo.resource.push(resourceObj)
    },
    [types.USER_DELETE](state, resourceId) {
        const resource = state.userInfo.resource
        for (let i = 0; i < resource.length; i++) {
            if (resource[i].id === resourceId) {
                state.userInfo.resource.splice(i, 1)
            }
        }
    },
    [types.USER_UPDATE](state, imgInfo) {
        const resource = state.userInfo.resource
        for (let i = 0; i < resource.length; i++) {
            if (resource[i].id === imgInfo.id) {
                const img = state.userInfo.resource[i]
                img.resourceTitle = imgInfo.resourceTitle
                img.resourceContent = imgInfo.resourceContent
            }
        }
    },
    [types.USER_IMAGES](state, imgs) {
        state.userUploads = imgs
    },
    [types.USER_LIKE_LIST](state, imgs) {
        state.uesrLikeList = imgs
    },
    [types.USER_STAGE](state, { stage, role }) {
        if (!stage || !role) return
        
        let userLevelCode, userStage
        //user code
        if (role.length === 2) {
            userLevelCode = userCode.supperUser
        } else if (role.length === 1) {
            userLevelCode = role[0]['id'] === 2 ? userCode.rater : userCode.approver
        } else {
            userLevelCode = userCode.normalUser
        }
        // if(userLevelCode === userCode.approver && stage < 3) {
        //     userStage = stageCode.approve
        // }
        if(userLevelCode === userCode.rater || userLevelCode === userCode.supperUser) {
            userStage = stageCode.rate
        }else {
            userStage = stageCode.stopLike
        }
        console.log('state.userStage = userStage',state.userStage , userStage)
        state.userStage = userStage
        /*
        //user stage
        //上传
        if (stage === 1) {
            userStage = stageCode.upload
        } else if (stage === 2) {
            //审批
            if (userLevelCode === userCode.approver || userLevelCode === userCode.supperUser) {
                userStage = stageCode.approve
            } else {
                userStage = stageCode.stopuload
            }

        } else if (stage === 3) {
            //点赞
            userStage = stageCode.like
        } else if (stage === 4) {
            //打分
            if (userLevelCode === userLevelCode.rater || userLevelCode === userCode.supperUser) {
                userStage = stageCode.rate
            } else {
                userStage = stageCode.stopLike
            }
        } else if (stage === 5) {
            //结束
            userStage = stageCode.end
        }
        if (userLevelCode === userCode.approver) { state.userStage = stageCode.approve } else {
            state.userStage = userStage

        }
        console.log('static code', state.userStage)
        */

    },
    [types.SET_USER_STAGE](state, userStage) {
        state.userStage = userStage
    },
    [types.USER_POINT_LIST](state, userPointList) {
        state.userPointList = userPointList
    }

}

export default mutations