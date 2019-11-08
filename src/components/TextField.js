import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({ className, value, onChange, text, monthsCalculation }) => {
  return (
    <div className={className}>
      <input
        value={value}
        type="text"
        onChange={onChange}
      />
      <span>{text}</span>
      <div className="clear-div"/>
      <span className="years">{monthsCalculation}</span>
    </div>
  )
}

export default TextField

TextField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string,
  monthsCalculation: PropTypes.string,
}