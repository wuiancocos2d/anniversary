import http from '../config/http'
import config from '../config/config'

export const loadUserInfo= async function () {
    let res = await http({
      url: config.LOAD_USER_INFO,
      method: 'post'
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
  console.log('get')
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

export  const getUserInfo = function() {}