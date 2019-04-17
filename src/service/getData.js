import http from '../config/http'
import config from '../config/config'

export const loadUserInfo= async function (payload) {
    let res = await http({
      url: config.LOAD_USER_INFO,
      method: 'get',
      data: {
        token: payload.token
      }
    })
    return res.data
}

export const userLogin = async function (user) {
  let res = await http({
    url: config.USER_LOGIN,
    method: 'post',
    data: user
  })
  console.log('login data',res)
  return res.data
}

export const getImages = async function () {
    let res = await http({
      url:config.IMAGE_URL,
      method: 'get',
    })
    return res.data['images']
}


