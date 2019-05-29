import store from ".";
import { stageCode } from '../config/config'
export default {
    userInfo: state => {
        return state.userInfo
    },
    stage: state => {
        if (state.userInfo.stage !== undefined) {
            const userStage = state.userInfo.stage.stageNo
            const userRole = store.getters.getRole
            // //上传
            // if (userStage === 1) {
            //     return stageCode.upload
            // }
            // //审批
            // else if (userStage === 2 && userRole === 3) {
            //     return stageCode.approve
            // }
            // //点赞
            // else if (userStage === 3) {
            //     return stageCode.like
            // }
            // //打分
            // else if (userStage === 4 && userRole === 2) {
            //     return stageCode.rate
            // }
            // else if (userStage === 5) {
            //     return stageCode.end
            // }

        }
        return stageCode.approve
    },
    getRole: state => {
        if (state.userInfo.role) {
            if (state.userInfo.role.length === 2) {
                return 3
            } else if (state.userInfo.role.length === 1) {
                return state.userInfo.role[0]["id"]
            } else {
                return 0
            }
        }
        return 0
    }
}