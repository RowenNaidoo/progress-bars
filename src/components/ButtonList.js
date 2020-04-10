import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const ButtonList = ({ buttons, onButtonClicked, limit }) => (
  buttons.map((button, index) =>
    <Button
      key={`button_${index}`}
      value={button}
      limit={limit}
      buttonClicked={onButtonClicked}
    />
  )
)

Button.propTypes = {
  buttons: PropTypes.arrayOf(Number),
  onButtonClicked: PropTypes.func,
  limit: PropTypes.number
}

export default ButtonList