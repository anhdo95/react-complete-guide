import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: 'https://nuxt-backend-ad7fc.firebaseio.com/'
})

instance.interceptors.request.use(config => {
  if (Cookies.get('token')) {
    config.params = config.params || {}
    config.params.auth = Cookies.get('token')
  }
  
  return config
})

instance.interceptors.response.use(res => {
  if (res) {
    return res.data
  }

  return res
})

export default instance