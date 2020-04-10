import React from 'react'
import { shallow } from 'enzyme'
import BarList from '../../components/BarList'


describe('#BarList', () => {
  const component = shallow(<BarList bars={[39, 37]} />)

  test('renders learn react link', () => {
    expect(component).toMatchSnapshot()
  })

  test('renders corresponding number of bars', () => {
    expect(component.find('Bar')).toHaveLength(2)
  })

})