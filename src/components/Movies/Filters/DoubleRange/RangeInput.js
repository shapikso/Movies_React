import React from 'react';

const RangeInput = ({minValue,maxValue, step, value}) =>  (
    <input  type="range" className="double-range__place-item" min={minValue} max={maxValue} step={step} value={value} />);

export default RangeInput;