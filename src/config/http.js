import axios from 'axios'
import { Message } from 'ant-design-vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charest=UTF-8'
// axios.defaults.baseURL = ''
// axios.defaults.withCredentials=true
// axios.defaults.crossDomain = true
// axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded"

const fetch = (options) => {
  let { method = 'get', data, url } = options
  data = JSON.stringify(data)
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, data)
    case 'post':
      return axios.post(url, data)
    case 'delet':
      return axios.delete(url, data)
    case 'put':
      return axios.put(url, data)
    default:
      return axios(options)
  }
}


export default async function http(options) {
  return fetch(options)
    .then((response) => {
      if (!response) {
        Message.error(
          'Connetion_refused'
        )
      } else
        return response
    }).catch((error) => {
      console.log('error', error)
      return error
    })
}