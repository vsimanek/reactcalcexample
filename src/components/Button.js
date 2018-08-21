import React from 'react';
import classNames from 'classnames';

const Button = ({text, onClick, color, className}) => {

    return (
        <div
            className={classNames('common', 'button', className, color)}
            onClick={onClick}>
            <div className="button-inside">
                {text}
            </div>
        </div>
    );
};

export default Button;