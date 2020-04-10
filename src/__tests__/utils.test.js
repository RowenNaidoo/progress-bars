import { handleIncrement } from '../utils'

describe('#utils', () => {
  describe('#handleIncrement', () => {
    test('returns 0 if sum of current value and increment value is less than 0', () => {
      expect(handleIncrement(5, -10, 100)).toEqual(0)
    })

    test('returns limit if sum of current value and increment value is more than limit', () => {
      expect(handleIncrement(50, 60, 100)).toEqual(100)
    })

    test('returns sum of current value and increment value', () => {
      expect(handleIncrement(50, -10, 100)).toEqual(40)
    })
  })
})