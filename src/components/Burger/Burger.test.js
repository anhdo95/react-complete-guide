import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { useSelector } from 'react-redux'

import Burger from '@/components/Burger/Burger'
import BurgerIngredient from '@/components/Burger/BurgerIngredient/BurgerIngredient'

configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn()
}))

function setReduxIngredientsState(ingredients) {
	useSelector.mockImplementation((callback) => callback({
    ingredients
  }))
}

describe('<Toolbar />', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<Burger />)
	})

	afterEach(() => {
		useSelector.mockReset()
	})

	test('should render three <BurgerIngredient /> elements if the ingredients has at least a value', () => {
		setReduxIngredientsState({
			salad: 1,
			cheese: 0,
			bacon: 0,
			meat: 0,
		})

		wrapper = shallow(<Burger />)
		expect(wrapper.find(BurgerIngredient)).toHaveLength(3)
  })

  describe('<BurgerIngredient type="bread-top" /> on the top of <Burger />', () => {
    function isCorrectOrder() {
      return wrapper
				.find(BurgerIngredient)
				.first()
				.contains(<BurgerIngredient type="bread-top" />)
    }

    test('should render exactly when ingredients are empty', () => {
      expect(isCorrectOrder()).toBe(true)
    })

    test('should render exactly when ingredients have a value', () => {
      setReduxIngredientsState({
        salad: 1,
        cheese: 0,
        bacon: 0,
        meat: 0,
      })
  
      wrapper = shallow(<Burger />)
      expect(isCorrectOrder()).toBe(true)
    })

    test('should render exactly when ingredients have values', () => {
      setReduxIngredientsState({
        salad: 1,
        cheese: 0,
        bacon: 1,
        meat: 0,
      })
  
      wrapper = shallow(<Burger />)
      expect(isCorrectOrder()).toBe(true)
    })
  })

  describe('<BurgerIngredient type="bread-bottom" /> on the bottom of <Burger />', () => {
    function isCorrectOrder() {
      return wrapper
				.find(BurgerIngredient)
				.last()
				.contains(<BurgerIngredient type="bread-bottom" />)
    }

    test('should render exactly when ingredients are empty', () => {
      expect(isCorrectOrder()).toBe(true)
    })

    test('should render exactly when ingredients have a value', () => {
      setReduxIngredientsState({
        salad: 1,
        cheese: 0,
        bacon: 0,
        meat: 0,
      })
  
      wrapper = shallow(<Burger />)
      expect(isCorrectOrder()).toBe(true)
    })

    test('should render exactly when ingredients have values', () => {
      setReduxIngredientsState({
        salad: 1,
        cheese: 0,
        bacon: 1,
        meat: 0,
      })
  
      wrapper = shallow(<Burger />)
      expect(isCorrectOrder()).toBe(true)
    })
  })
})
