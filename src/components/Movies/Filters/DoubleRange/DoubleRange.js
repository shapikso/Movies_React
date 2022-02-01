import React from 'react';
//import InputValue from "./InputValue";
import Slider from "rc-slider";
import "./slider.scss";
import InputField from "../../../common/Input/InputField";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const DoubleRange = ({title,minValue,maxValue, step, setRange, minInputValue, maxInputValue}) => {

    const onChangeRangeHandler = ([key,value]) => setRange(key,value);

    return (
        <div className="form-filters__ranges__item double-range">
            <div className="double-range__title">{title}</div>
            <div className="double-range__info">
                <InputField className="double-range__info-min" readOnly={true} value={minInputValue} />
                <InputField className="double-range__info-min" readOnly={true} value={maxInputValue} />
            </div>
            <div className="double-range__place">
                <Range
                    min={+minValue}
                    max={+maxValue}
                    step={step}
                    defaultValue={[+minValue, +maxValue]}
                    onChange={onChangeRangeHandler}
                />
            </div>
        </div>
    );
};

export default DoubleRange;