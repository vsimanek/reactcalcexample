import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'

import csMessages from './locale/cs'
import './scss/App.scss'
import LoanCalculator from './containers/LoanCalculator'

class App extends Component {

  render() {
    return (
      <IntlProvider locale="cs" messages={csMessages}>
        <LoanCalculator/>
      </IntlProvider>
    )
  }
}

export default App