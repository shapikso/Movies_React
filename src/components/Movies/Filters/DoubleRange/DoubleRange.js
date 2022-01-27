import React from 'react';
// import RangeInput from "./RangeInput";
import InputValue from "./InputValue";
import Slider from "rc-slider";
import "./slider.scss";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const DoubleRange = ({title,minValue,maxValue, step, setRange, minInputValue, maxInputValue}) => {
    return (
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
                {/*<RangeInput maxValue={maxValue} step={step} value={minValue} minValue={minValue}/>*/}
                {/*<RangeInput maxValue={maxValue} step={step} value={maxValue} minValue={minValue}/>*/}
            </div>
        </div>
    );
};

export default DoubleRange;