import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bar = ({ barValue }) => {
  return (
    <BarContainer>
      <UsageAmount id='barValue'>
        {barValue}%
      </UsageAmount>
      <BarFill barValue={barValue}>
      </BarFill>
    </BarContainer>
  )
}

const BarContainer = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid gray;
`

const BarFill = styled.div`
  width: ${props => props.barValue}%;
  max-width: 100%;
  height: 40px;
  background-color: ${props => props.barValue < 100 ? '#85C1E9' : 'red'};
  transition: all 0.2s ease;
`

const UsageAmount = styled.div`
  position: absolute;
  left: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`

Bar.propTypes = {
  barValue: PropTypes.number.isRequired
}

export default Bar