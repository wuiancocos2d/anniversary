import http from '../config/http'
import config from '../config/config'
import { getStore } from '../config/mUtils'
import { stageCode } from '../config/config'
import store from '../store/index'
import { env } from '../config/config'

const userId = getStore('userId')

export const loadUserInfo = async function () {
  if (userId !== 'undefined' && userId !== undefined && userId !== null && userId !== '') {
    if (env === 'dev') {
      let res = await http({
        // url: config.LOAD_USER_INFO + userId,
        url: config.LOAD_USER_INFO,
        method: 'post',
        data: { userNm: userId }
      })
      return res.data
    } else {
      let res = await http({
        url: config.LOAD_USER_INFO + userId,
        method: 'post',
      })
      return res.data
    }
  }
  else return
}

export const userLogin = async function (user) {
  let res = await http({
    url: env === 'dev' ? config.USER_LOGIN : config.USER_LOGIN + parseJsonToPostString(user),
    method: 'post',
  })
  return res.data
}

export const getImages = async function (opt) {
  let res = await http({
    url: env === 'dev' ? config.IMAGE_URL : config.IMAGE_URL + parseJsonToPostString(opt),
    method: 'get',
  })
  return res.data
}

export const getAuthoList = async function () {
  let res = await http({
    url: config.AUTHORITYList_URL,
    method: 'get'
  })
  return res.data
}

export const getImgModal = async function () {
  let res = await http({
    url: config.IMGMODAL_URL,
    method: 'get'
  })
  return res.data
}


// 图片控制

export const uploadImgData = async function (imgData) {
  let res = await http({
    url: env === 'dev' ? config.USERUPLOAD_URL : config.USERUPLOAD_URL + parseJsonToPostString(imgData),
    method: 'post'
  })
  return res.data
}

export const resourceDelete = async function (imgId) {
  let res = await http({
    url: config.USER_DELET_IMAGE + imgId,
    method: 'delet'
  })
  return res.data
}

export const resourceUpdate = async function (updateItem) {
  let res = await http({
    url: env === 'dev' ? config.RESOURCE_UPDATE : config.RESOURCE_UPDATE + parseJsonToPostString(updateItem),
    method: 'put'
  })
  return res.data
}

export const resourceCheck = async function (itemId) {
  let res = await http({
    url: env === 'dev' ? config.RESOURCE_CHECK : config.RESOURCE_CHECK + itemId,
    method: 'put'
  })
  return res.data
}

export const resourceUnCheck = async function (itemId) {
  let res = await http({
    url: env === 'dev' ? config.RESOURCE_UNCHECK : config.RESOURCE_UNCHECK + itemId,
    method: 'put'
  })
  return res.data
}
//点赞
export const likeImage = async function (imageId) {
  let res = await http({
    url: env === 'dev' ? config.ADD_LIKE_IMAGE : config.ADD_LIKE_IMAGE + imageId + '/' + store.state.userId,
    method: 'post'
  })
  return res.data
}
//打分
export const rateImage = async function(imageItem) {
  let res = await http({
    url: env === 'dev' ? config.POINT_IMAGE : config.POINT_IMAGE + parseJsonToPostString(imageItem),
    method: 'post'
  })
  return res.data
}
export const getUserImages = async function () {
  let res = await http({
    url: env === 'dev' ? config.USER_IMAGES : config.USER_IMAGES + store.state.userId,
    method: 'get'
  })
  return res.data
}

//根据图片ID获取图片点赞列表
export const getImageLikeListById = async function(imgId) {
  let res = await http({
    url: env === 'dev' ? config.GET_IMAGE_LIKE_LIST : config.GET_IMAGE_LIKE_LIST + imgId,
    method: 'get'
  })
  console.log('url',config.GET_IMAGE_LIKE_LIST + imgId)
  return res.data
}

// 主页 图片
export const getHomepageImage = async function (page) {
  const userStage = store.state.userStage
  let url
  switch (userStage) {
    case stageCode.approve:
      url =  env === 'dev' ? config.GET_UNCHECK_IMAGES : config.GET_UNCHECK_IMAGES + page + '/12'
      break;
    case stageCode.like:
    case stageCode.stopLike:
      url = env === 'dev' ? config.GET_CHECK_IMAGES : config.GET_CHECK_IMAGES + page + '/12'
      break
    case stageCode.rate:
      url =  config.GET_CANDIDATE_IMAGES 
      break
    case stageCode.end:
      url = config.GET_WINNERS_IMAGES
      break
    default:
      url = ''
      break;
  }
  if (url === '') return null
  let res = await http({
    url: url ,
    method: 'get'
  })
  return res.data
}





function parseJsonToPostString(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
