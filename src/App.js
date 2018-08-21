import React, {Component} from 'react';
import './scss/App.scss';
import csMessages from './locale/cs';
import {IntlProvider} from 'react-intl';
import LoanCalculator from "./containers/LoanCalculator";

class App extends Component {

    render() {
        return (
            <IntlProvider locale="cs" messages={csMessages}>
                <LoanCalculator />
            </IntlProvider>
        );
    }
}

export default App;