import {RECORD_USERINFO} from './mutaions-types.js'
import {loadUserInfo} from '../service/getData'
import {getPromiseAction} from '../service/promiseUtils'
export default {

    async getUserInfo({
        commit     
    }){
        return getPromiseAction(loadUserInfo(),commit,RECORD_USERINFO)
    }
}