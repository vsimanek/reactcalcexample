import React, {Component} from 'react';
import Button from "../components/Button";
import {injectIntl, FormattedMessage} from 'react-intl';

@injectIntl
class Result extends Component {

    render() {
        const {monthFee, intl} = this.props;
        return (
            <div className="right-side">
                <div className="content">
                    <span className="monthly-title"><FormattedMessage id="result.monthly.title"/></span>
                    <div className="monthly-fee">
                        {monthFee.toLocaleString()} <FormattedMessage id="common.currency"/>
                    </div>
                    <Button
                        text={intl.formatMessage({id: "result.button.continue"})}
                    />
                    <div className="link">
                        <i className="fas fa-phone"/>
                        <a className="call-link" href="javascript:void(0)">
                            <FormattedMessage id="result.we.call.you"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Result;