import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://nuxt-backend-ad7fc.firebaseio.com/'
})

instance.interceptors.response.use(res => {
  if (res) {
    return res.data
  }

  return res
})

export default instance