import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charest=UTF-8'
axios.defaults.baseURL = ''

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
      if (response.data) {
        if (response.data.code === 10000) {
          const h = this.$createElement
          this.$info({
            title: 'System Message',
            content: h('div', {}, [
              h('p', 'Login Timeout , please login again'),
            ]),
            onOk() {
              this.$router.push('/login')
            }
          })
        }
      }
      return response
    }).catch((error) => {
      return error
    })
}