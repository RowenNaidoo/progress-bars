import React from 'react'
import PropTypes from 'prop-types'
import Bar from './Bar'
import styled from 'styled-components'

const BarList = ({ bars }) => (
  bars
    .map((val, index) => <BarContainer key={`Bar_${index}`}><Bar barValue={val} /></BarContainer>)
)

const BarContainer = styled.div`
  margin: 10px 0;
`

BarList.propTypes = {
  bars: PropTypes.arrayOf(Number)
}

export default BarList