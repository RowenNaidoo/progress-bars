import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import * as service from '../service/bars'

const barsPromise = new Promise((resolve, reject) => {
  const json = () => (
    {"buttons":[7,28,-7,-21],"bars":[39,37],"limit":150}
  )
  resolve({
    json
  })
})

describe('#App', () => {
  let useEffect
  let component

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  }

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect')
    mockUseEffect()
    mockUseEffect()

    service.getBarsData = jest.fn().mockReturnValue(barsPromise)
    component = shallow(<App />)
  })

  test('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  test('renders relevant components', () => {
    expect(component.find('BarList')).toHaveLength(1)
    expect(component.find('Select')).toHaveLength(1)
    expect(component.find('ButtonList')).toHaveLength(1)
  })

})
