import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://nuxt-backend-ad7fc.firebaseio.com/'
})

export default instance