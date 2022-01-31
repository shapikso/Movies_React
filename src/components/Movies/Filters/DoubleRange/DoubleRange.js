import React from 'react';
// import RangeInput from "./RangeInput";
import InputValue from "./InputValue";
import Slider from "rc-slider";
import "./slider.scss";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const DoubleRange = ({title,minValue,maxValue, step, setRange, minInputValue, maxInputValue}) => (
    <div className="form-filters__ranges__item double-range">
        <div className="double-range__title">{title}</div>
        <div className="double-range__info">
            <InputValue value={minInputValue} />
            <InputValue value={maxInputValue} />
        </div>
        <div className="double-range__place">
            <Range
                min={+minValue}
                max={+maxValue}
                step={step}
                defaultValue={[+minValue, +maxValue]}
                onChange={(value) => setRange(value[0],value[1])}
            />
        </div>
    </div>
);


export default DoubleRange;