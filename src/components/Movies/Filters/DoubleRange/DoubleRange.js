import React from 'react';
import InputField from "../../../common/Input/InputField";
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import './slider.scss';
import {StDoubleRange, StDoubleRangeInfo, StDoubleRangePlace, StDoubleRangeTittle} from "./styled";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const DoubleRange = ({title,minValue,maxValue, step, setRange, minInputValue, maxInputValue}) => {

    const onChangeRangeHandler = ([key,value]) => setRange(key,value);

    return (
        <StDoubleRange>
            <StDoubleRangeTittle>{title}</StDoubleRangeTittle>
            <StDoubleRangeInfo>
                <InputField className="double-range__info-min" readOnly={true} value={minInputValue} />
                <InputField className="double-range__info-min" readOnly={true} value={maxInputValue} />
            </StDoubleRangeInfo>
            <StDoubleRangePlace>
                <Range
                    min={+minValue}
                    max={+maxValue}
                    step={step}
                    defaultValue={[+minValue, +maxValue]}
                    onChange={onChangeRangeHandler}
                />
            </StDoubleRangePlace>
        </StDoubleRange>
    );
};

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