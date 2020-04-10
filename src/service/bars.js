import 'whatwg-fetch'

export const getBarsData = () => (
  window.fetch('http://pb-api.herokuapp.com/bars')
)
