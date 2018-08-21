import {INTEREST_RATE} from "../constants/InitialConstants";
import {SERVER_PATH} from "../constants/RouteConstants";

export const calculateFetch = (money, months, intl) => {
    fetch(SERVER_PATH + '/loan?money=' + money + '&months=' + months + '&interest=' + INTEREST_RATE)
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    this.setState({
                        monthFee: data.monthFee,
                        overallFee: data.overallFee
                    })
                })
            } else {
                alert(intl.formatMessage({id: "server.error"}));
            }
        }).catch((err) => {
        console.log('ERROR: ' + err.message);
        // this should be done better, just for example purpose it is done this way
        alert(intl.formatMessage({id: "server.error"}));
    })
};