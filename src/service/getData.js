import http from '../config/http'
import config from '../config/config'
import { getStore } from '../config/mUtils'

export const loadUserInfo = async function () {
  const userId = getStore('userId')
  if (userId !== 'undefined' && userId !== undefined && userId !== null && userId !== '') {
    let res = await http({
      url: config.LOAD_USER_INFO,
      method: 'post',
      data: {userNm: userId}
    })
    return res.data
  }
  else return 
}

export const userLogin = async function (user) {
  let res = await http({
    // url: config.USER_LOGIN,
    url: config.USER_LOGIN,

    method: 'post',
    data: user
  })
  return res.data
}

export const getImages = async function () {
  let res = await http({
    url: config.IMAGE_URL,
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
    // url: config.USERUPLOAD_URL + parseJsonToPostString(imgData),
    url: config.USERUPLOAD_URL,
    data: imgData,
    method: 'post'
  })
  return res.data
}



// function parseJsonToPostString(obj)  {
//   var str = [];
//   for (var p in obj)
//     if (obj.hasOwnProperty(p)) {
//       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//     }
//   return str.join("&");
// }
