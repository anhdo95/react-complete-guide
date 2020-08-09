import axios from './axios'

export function createOrder(order) {
  return axios.post('/orders.json', order)
}