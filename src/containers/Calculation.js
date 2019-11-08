import React, { Component } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import TextField from '../components/TextField'
import MovableSlider from '../components/MovableSlider'
import {
  INITIAL_INSURANCE,
  INITIAL_ONLINE_FEE,
  INTEREST_RATE,
  MAX_LOAN_MONEY,
  MAX_LOAN_MONTHS,
  MIN_LOAN_MONEY,
  MIN_LOAN_MONTHS,
  MONEY_SLIDER_STEP,
  MONTH_SLIDER_STEP,
  RPSN_RATE,
} from '../constants/InitialConstants'
import { radioOptionNo, radioOptionYes } from '../constants/ComponentConstants'

@injectIntl
class Calculation extends Component {

  funMonthsCalculation = (months, intl) => {
    const quotient = Math.floor(months / 12)
    const remainder = months % 12
    const monthsString = intl.formatMessage({ id: 'calculation.months' })
    const yearsString = intl.formatMessage({ id: 'calculation.years' })
    return quotient + ' ' + yearsString + ' ' + (remainder > null ? remainder + ' ' +
      monthsString : '')
  }

  parseTextValueToNumber = (value) => {
    return parseInt(value, 0).toLocaleString()
  }

  render() {
    const {
      money, months, overallFee, onChangeMoney,
      onChangeMonths, onChangeInputMoney, onChangeInputMonths,
      onChangeInsuranceYes, onChangeInsuranceNo, selectedOption,
      intl,
    } = this.props

    return (
      <div className="left-side">
        <div>
          <h2><FormattedMessage id="calculation.title"/></h2>
        </div>
        <div>
          <MovableSlider
            text={intl.formatMessage({ id: 'calculation.loan.how.much' })}
            min={MIN_LOAN_MONEY}
            max={MAX_LOAN_MONEY}
            step={MONEY_SLIDER_STEP}
            value={money}
            onChange={onChangeMoney}
            valueName={intl.formatMessage({ id: 'common.currency' })}
          />
          <TextField
            className="moneyField"
            value={this.parseTextValueToNumber(money)}
            onChange={onChangeInputMoney}
            text={intl.formatMessage({ id: 'common.currency' })}
          />
        </div>
        <div className="clear-div"/>
        <div>
          <MovableSlider
            text={intl.formatMessage({ id: 'calculation.loan.how.much' })}
            min={MIN_LOAN_MONTHS}
            max={MAX_LOAN_MONTHS}
            step={MONTH_SLIDER_STEP}
            value={months}
            onChange={onChangeMonths}
            valueName={intl.formatMessage({ id: 'calculation.months' })}
          />
          <TextField
            className="monthsField"
            value={this.parseTextValueToNumber(months)}
            onChange={onChangeInputMonths}
            text={intl.formatMessage({ id: 'calculation.months' })}
            monthsCalculation={this.funMonthsCalculation(months, intl)}
          />
        </div>
        <div className="clear-div"/>
        <div>
          <h3><FormattedMessage id="calculation.insurance.title"/></h3>
        </div>
        <div className="radios-btns">
          <form>
            <input
              id="yes"
              value={radioOptionYes}
              type="radio"
              onChange={onChangeInsuranceYes}
              checked={selectedOption === radioOptionYes}
            /><label htmlFor="yes"><FormattedMessage id="calculation.insurance.yes"/></label>
            <input
              id="no"
              value={radioOptionNo}
              type="radio"
              onChange={onChangeInsuranceNo}
              checked={selectedOption === radioOptionNo}
            /> <label htmlFor="no"><FormattedMessage id="calculation.insurance.no"/></label>
          </form>
        </div>
        <div className="info-text">
         <span>
           <FormattedMessage
             id="calculation.insurance.information"
             values={{
               interestRate: <strong>{INTEREST_RATE.toLocaleString()}%</strong>,
               rspnRate: <strong>{RPSN_RATE.toLocaleString()}%</strong>,
               insurance:
                 <strong>{INITIAL_INSURANCE.toLocaleString()} {intl.formatMessage({ id: 'common.currency' })}/{intl.formatMessage({ id: 'calculation.monthly' })}</strong>,
               onlineFee:
                 <strong>{INITIAL_ONLINE_FEE.toLocaleString()} {intl.formatMessage({ id: 'common.currency' })}</strong>,
               overallSum:
                 <strong>{overallFee.toLocaleString()} {intl.formatMessage({ id: 'common.currency' })}</strong>,
             }}
           />
         </span>
        </div>
      </div>
    )
  }

}

export default Calculation

Calculation.propTypes = {
  money: PropTypes.number,
  months: PropTypes.number,
  onChangeMoney: PropTypes.func,
  onChangeMonths: PropTypes.func,
  onChangeInputMoney: PropTypes.func,
  onChangeInputMonths: PropTypes.func,
  onChangeInsuranceYes: PropTypes.func,
  onChangeInsuranceNo: PropTypes.func,
  selectedOption: PropTypes.string,
  intl: PropTypes.object,
}