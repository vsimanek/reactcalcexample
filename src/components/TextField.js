import React from 'react';

const TextField = ({className, value, onChange, text, monthsCalculation}) => {
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
};

export default TextField;