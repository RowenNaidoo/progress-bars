import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Select = ({ options, selectChanged }) => (
  <StyledSelect
    onChange={(e) => { selectChanged(e.target.value) }}>
    {options.map((opt, index) => (
      <option key={`Option_${index}`} value={index}>{`# progress ${index + 1}`}</option>
    ))}
  </StyledSelect>
)

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
`

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number),
  selectChanged: PropTypes.func
}

export default Select