import http from '../config/http'
import config from '../config/config'
import {getStore} from '../config/mUtils'

export const loadUserInfo= async function () {
    let res = await http({
      url: config.LOAD_USER_INFO,
      method: 'post',
      data: {userId: getStore('userId')}
    })
    return res.data
}

export const loadUserInfoById = async function() {
  const userId = getStore('userId')
  let res = await http({
    url: config.LOAD_USER_BY_ID,
    method: 'post',
    data: {'userNu': userId}
  })
  return res.data
}

export const userLogin = async function (user) {
  let res = await http({
    url: config.USER_LOGIN,
    method: 'post',
    data: user
  })
  return res.data
}

export const getImages = async function () {
    let res = await http({
      url:config.IMAGE_URL,
      method: 'get',
    })
    return res.data
}

export const getArticle = async function () {
    let res = await http({
        url: config.ARTICEL_URL,
        method: 'get',
    })
    return res.data
}

export const getAuthoList = async function() {
  let res = await http({
    url: config.AUTHORITYList_URL,
    method: 'get'
  })
  return res.data
}

export const getImgModal = async function() {
    let res = await http({
        url: config.IMGMODAL_URL,
        method: 'get'
    })
    return res.data
}

export  const uploadImgData = async function(imgData) {
  parseJsonToPostString(imgData)
  let res = await http({
    // url: config.USERUPLOAD_URL + parseJsonToPostString(imgData),
    url: config.USERUPLOAD_URL,
    method: 'post'
  })
  return res
}



function parseJsonToPostString(obj)  {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
