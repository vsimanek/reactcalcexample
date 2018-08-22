import {INTEREST_RATE} from "../constants/InitialConstants";
import {SERVER_PATH} from "../constants/RouteConstants";

export const calculateLoanFetch = (money, months, intl, setStateHandler) => {
    fetch(SERVER_PATH + '/loan?money=' + money + '&months=' + months + '&interest=' + INTEREST_RATE)
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    setStateHandler(data);
                })
            } else {
                // this should be done better, just for example purpose it is done this way
                alert(intl.formatMessage({id: "server.error"}));
            }
        }).catch((err) => {
        console.log('ERROR: ' + err.message);
        // this should be done better, just for example purpose it is done this way
        alert(intl.formatMessage({id: "server.error"}));
    })
};