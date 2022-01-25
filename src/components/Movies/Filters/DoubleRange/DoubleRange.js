import React from 'react';
import RangeInput from "./RangeInput";
import InputValue from "./InputValue";
// Budget, $

const DoubleRange = ({title,minValue,maxValue, step}) => {
    return (
        <div className="form-filters__ranges__item double-range">
            <div className="double-range__title">{title}</div>
            <div className="double-range__info">
                <InputValue value={minValue} />
                <InputValue value={maxValue} />
            </div>
            <div className="double-range__place">
                <RangeInput maxValue={maxValue} step={step} value={minValue} minValue={minValue}/>
                <RangeInput maxValue={maxValue} step={step} value={maxValue} minValue={minValue}/>
            </div>
        </div>
    );
};

export default DoubleRange;