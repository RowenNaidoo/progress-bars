import React from 'react'
import { shallow } from 'enzyme'
import Select from '../../components/Select'


describe('#Select', () => {

  test('renders learn react link', () => {
    const component = shallow(<Select options={[39, 37]} />)
    expect(component).toMatchSnapshot()
  })

})