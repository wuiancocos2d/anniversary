import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charest=UTF-8'

axios.defaults.baseURL = ''
axios.defaults.withCredentials=true
axios.defaults.crossDomain = true
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded"

const fetch = (options) => {
  let { method = 'get', data, url } = options
  data = JSON.stringify(data)
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, data)
    case 'post':
      return axios.post(url, data)
    default:
      return axios(options)
  }
}


export default async function http(options) {
  return fetch(options)
    .then((response) => {
      return response
    }).catch((error) => {
      console.log('error',error)
      return error
    })
}