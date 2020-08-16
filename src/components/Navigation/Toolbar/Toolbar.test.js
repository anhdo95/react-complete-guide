import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Toolbar from '@/components/Navigation/Toolbar/Toolbar'
import NavigationItem from '@/components/Navigation/NavigationItem/NavigationItem'

configure({ adapter: new Adapter() })

describe('<Toolbar />', () => {
  test('should render two <NavigationItem /> elements if not authenticated', () => {
    const wrapper = shallow(<Toolbar />)
    expect(wrapper.find(NavigationItem)).toHaveLength(2)
  })
  
})
