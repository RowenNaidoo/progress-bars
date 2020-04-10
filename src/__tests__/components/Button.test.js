import React from 'react'
import { shallow } from 'enzyme'
import Button from '../../components/Button'


describe('#Button', () => {

  test('renders learn react link', () => {
    const onButtonClicked = jest.fn()
    const component = shallow(<Button value={50} buttonClicked={onButtonClicked} />)
    expect(component).toMatchSnapshot()
  })

})