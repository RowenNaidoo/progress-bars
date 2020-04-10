import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ value, buttonClicked }) => (
  <StyledButton onClick={() => buttonClicked(value)}>{value}</StyledButton>
)

const StyledButton = styled.button`
  flex: 1 1 auto;
  margin: 5px 0;
  height: 40px;
  transition: all 0.4s ease 0s;
  font-weight: bold;
  background-color: #85929E;

  @media (min-width: 576px) {
    flex: 1 1 auto;
    margin: 0 5px;
  }

  &:hover {
    cursor: pointer;
    background-color: #34495E;
    border: 1px solid #34495E;
    transition: all 0.4s ease 0s;
    color: white;
  }
`

Button.propTypes = {
  value: PropTypes.number,
  buttonClicked: PropTypes.func
}

export default Button