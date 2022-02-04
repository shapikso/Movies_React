import React from 'react';
import {StOption} from "../../styled";

const SelectItem = ({value, title}) => {
    return (
        <StOption value={value}>{title}</StOption>
    );
};

export default SelectItem;