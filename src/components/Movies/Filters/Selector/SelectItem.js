import React from 'react';

const SelectItem = ({value, title}) => {
    return (
        <option value={value}>{title}</option>
    );
};

export default SelectItem;