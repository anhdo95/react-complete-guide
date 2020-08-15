import axios from './axios'

export function getIngredientsPrices() {
  return axios.get(`/ingredients/prices.json`)
}

export function getOrders() {
  return axios.get(`/orders.json`)
}

export function createOrder(order) {
  return axios.post('/orders.json', order)
}

