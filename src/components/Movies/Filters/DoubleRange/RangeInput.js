import React from 'react';

const RangeInput = ({minValue,maxValue, step, value}) =>  (
    <input  type="range" min={minValue} max={maxValue} step={step} value={value} />);

export default RangeInput;