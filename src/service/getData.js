import http from '../config/http'
import config from '../config/config'
import { getStore } from '../config/mUtils'
import store from '../store/index'
const env = 'production'
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

export const getUserImages = async function () {
  let res = await http({
    url: env === 'dev' ? config.USER_IMAGES : config.USER_IMAGES + userId,
    method: 'get'
  })
  return res.data
}


// 主页 图片
export const getHomepageImage = async function (page) {
  const stage = store.getters.stage
  let url
  switch (stage) {
    case 1:
      url = config.GET_UNCHECK_IMAGES
      break;
    case 2: 
      url = config.GET_CHECK_IMAGES
      break
    case 3: 
      url = config.GET_CANDIDATE_IMAGES
      break
    case 4:
      url = config.GET_WINNERS_IMAGES
      break    
    default:
      url = ''
      break;
  }
  if(url === '') return null
  let res = await http({
      url: url + page + '/12',
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
