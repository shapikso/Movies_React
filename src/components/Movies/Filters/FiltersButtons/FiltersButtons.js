import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/Button/Button';
import {StFilterButton} from "../styled";

const FiltersButtons = ({formSubmitHandler, formResetHandler, isResetDisabled}) =>
    (
        <StFilterButton>
            <Button onClick={formResetHandler} type="reset" isDisabled={isResetDisabled} contentKey="Reset"/>
            <Button onClick={formSubmitHandler} contentKey ="Submit"/>
        </StFilterButton>
    );

FiltersButtons.propTypes = {
    formSubmitHandler: PropTypes.func.isRequired,
    formResetHandler : PropTypes.func.isRequired,
    isResetDisabled: PropTypes.bool.isRequired
};

export default FiltersButtons;