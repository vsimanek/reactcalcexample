import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, color, className }) => {

  return (
    <div
      className={classNames('common', 'button', className, color)}
      onClick={onClick}>
      <div className="button-inside">
        {text}
      </div>
    </div>
  )
}

export default Button

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  className: PropTypes.string,
}