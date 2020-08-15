export const SET_INGREDIENTS_PRICES = 'SET_INGREDIENTS_PRICES'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const RESET_INGREDIENTS = 'RESET_INGREDIENTS'

export function setIngredientsPrices(prices) {
  return {
    type: SET_INGREDIENTS_PRICES,
    payload: prices
  }
}

export function addIngredient(type) {
  return {
    type: ADD_INGREDIENT,
    payload: {
      type
    }
  }
}

export function removeIngredient(type) {
  return {
    type: REMOVE_INGREDIENT,
    payload: {
      type
    }
  }
}

export function resetIngredients() {
  return {
    type: RESET_INGREDIENTS,
  }
}