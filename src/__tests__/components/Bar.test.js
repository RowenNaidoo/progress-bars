import React from 'react'
import { shallow } from 'enzyme'
import Bar from '../../components/Bar'


describe('#Bar', () => {
  const component = shallow(<Bar barValue={50} />)

  test('renders learn react link', () => {
    expect(component).toMatchSnapshot()
  })

  test('bar displays correct value', () => {
    expect(component.find('#barValue').text()).toEqual('50%')
  })

})