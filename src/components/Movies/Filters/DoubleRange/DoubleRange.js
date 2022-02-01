import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import './slider.scss';
import Input from '../../../common/input/InputField';
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const DoubleRange = ({title,minValue,maxValue, step, setRange, minInputValue, maxInputValue}) => (
    <div className="form-filters__ranges__item double-range">
        <div className="double-range__title">{title}</div>
        <div className="double-range__info">
            <Input value={minInputValue} className="double-range__info-min" />
            <Input value={maxInputValue} className="double-range__info-max" />
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

DoubleRange.propTypes = {
    minValue: PropTypes.string.isRequired,
    maxValue: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
    maxInputValue: PropTypes.number.isRequired,
    minInputValue: PropTypes.number.isRequired,
    setRange : PropTypes.func.isRequired
};

export default DoubleRange;