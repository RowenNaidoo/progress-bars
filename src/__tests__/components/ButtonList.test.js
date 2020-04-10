import React from 'react'
import { shallow } from 'enzyme'
import ButtonList from '../../components/ButtonList'


describe('#ButtonList', () => {

  test('renders learn react link', () => {
    const buttonClicked = jest.fn()
    const component = shallow(<ButtonList buttons={[7, 28, -7, -21]} onButtonClicked={buttonClicked} limit={150} />)
    expect(component).toMatchSnapshot()
  })

})