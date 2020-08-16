import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Cookies from 'js-cookie'

import Toolbar from '@/components/Navigation/Toolbar/Toolbar'
import NavigationItem from '@/components/Navigation/NavigationItem/NavigationItem'

configure({ adapter: new Adapter() })

jest.mock('js-cookie', () => {
  const cookies = {}

  return {
    get(key) {
      return cookies[key]
    },
    set(key, value) {
      cookies[key] = value
    }
  }
})

describe('<Toolbar />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Toolbar />)
  })

  test('should render two <NavigationItem /> elements if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2)
  })

  describe('If authenticated', () => {
    beforeEach(() => {
      Cookies.set('token', 'token')
      wrapper = shallow(<Toolbar />)
    })

    test('should render three <NavigationItem /> elements', () => {
      expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })

    test('should render an exact logout link', () => {
      expect(
				wrapper.contains(
					<NavigationItem to="/sign-out" exact>
						Sign Out
					</NavigationItem>
				)
			).toBe(true)
    })
    
  })
  
  
  
})
