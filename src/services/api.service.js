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

export function signUp(data) {
  return axios.post(
		`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
		data
	)
}

export function signIn(data) {
  return axios.post(
		`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
		data
	)
}

