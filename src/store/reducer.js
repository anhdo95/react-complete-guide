import _ from 'lodash'
import * as ACTION from './action'

const initialState = {
  user: null,
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  },
  ingredientsPrices: null,
  totalPrice: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_USER:
      state.user = action.payload
      break

		case ACTION.SET_INGREDIENTS_PRICES:
			state.ingredientsPrices = action.payload
			break

		case ACTION.ADD_INGREDIENT:
      state.ingredients[action.payload.type]++
      state.totalPrice += state.ingredientsPrices[action.payload.type]
      break
      
    case ACTION.REMOVE_INGREDIENT:
      state.ingredients[action.payload.type]--
      state.totalPrice -= state.ingredientsPrices[action.payload.type]
      break

    case ACTION.RESET_INGREDIENTS:
      state.ingredients = initialState.ingredients
      state.totalPrice = initialState.totalPrice
      break

		default:
			break
  }
  
  return _.cloneDeep(state)
}
