import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import Result from './Result'
import Calculation from './Calculation'
import { calculateLoanFetch } from '../utils/fetchUtils'
import { INITIAL_MONEY, INITIAL_MONTH_FEE, INITIAL_MONTHS, INITIAL_OVERALL_FEE } from '../constants/InitialConstants'
import { radioOptionNo, radioOptionYes } from '../constants/ComponentConstants'

let timer = 0

@injectIntl
class LoanCalculator extends Component {

  state = {
    money: INITIAL_MONEY,
    months: INITIAL_MONTHS,
    monthFee: INITIAL_MONTH_FEE,
    overallFee: INITIAL_OVERALL_FEE,
    selectedOption: radioOptionYes,
  }

  handleMoneyChange = (value) => {
    this.setState({
      money: value,
    })
    this.handleCalculation()
  }

  handleMonthsChange = (value) => {
    this.setState({
      months: value,
    })
    this.handleCalculation()
  }

  handleInputMoneyChange = (e) => {
    this.setState({
      money: this.validateNumberInput(e.target.value),
    })
    this.handleCalculation()
  }

  validateNumberInput = (inputValue) => {
    let number = parseInt(inputValue.replace(/\s/g, ''), 0)
    if (isNaN(number)) {
      number = 0
    }
    return number
  }

  handleInputMonthsChange = (e) => {
    this.setState({
      months: this.validateNumberInput(e.target.value),
    })
    this.handleCalculation()
  }

  handleCalculation = () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      this.calculateHandler()
    }, 500)
  }

  handleInsuranceCheckYes = () => {
    this.setState({
      selectedOption: radioOptionYes,
    })
  }

  handleInsuranceCheckNo = () => {
    this.setState({
      selectedOption: radioOptionNo,
    })
  }

  calculateHandler = () => {
    const { money, months } = this.state
    const { intl } = this.props
    calculateLoanFetch(money, months, intl, (data) => {
      this.setState({
        monthFee: data.monthFee,
        overallFee: data.overallFee,
      })
    })
  }


  render() {
    const { selectedOption, money, months, overallFee, monthFee } = this.state

    return (
      <div className="main">
        <Calculation
          onChangeMoney={this.handleMoneyChange}
          onChangeInputMoney={this.handleInputMoneyChange}
          onChangeMonths={this.handleMonthsChange}
          onChangeInputMonths={this.handleInputMonthsChange}
          onChangeInsuranceYes={this.handleInsuranceCheckYes}
          onChangeInsuranceNo={this.handleInsuranceCheckNo}
          selectedOption={selectedOption}
          money={money}
          months={months}
          overallFee={overallFee}
        />
        <Result
          monthFee={monthFee}
        />
      </div>
    )
  }
}

export default LoanCalculator

LoanCalculator.propTypes = {
  selectedOption: PropTypes.string,
  money: PropTypes.number,
  months: PropTypes.number,
  overallFee: PropTypes.number,
  monthFee: PropTypes.number,
  intl: PropTypes.object,
}