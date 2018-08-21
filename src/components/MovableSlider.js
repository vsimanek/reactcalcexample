import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

const MovableSlider = ({value, text, min, max, step, onChange, valueName}) => {

        return (
            <div className="myslider">
                <p className="slider-title">
                    {text}
                </p>
                <Slider
                    className="actual-slider"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    tooltip={false}
                    orientation="horizontal"
                    onChange={onChange}
                />
                <div className="clear-div" />
                <span className="slider-left-side">{min.toLocaleString()} {valueName}</span>
                <span className="slider-right-side">{max.toLocaleString()} {valueName}</span>
            </div>
        )
};

export default MovableSlider;