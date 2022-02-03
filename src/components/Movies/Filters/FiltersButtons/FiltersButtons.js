import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/Button/Button';
import {StFilterButton} from "../styled";

const FiltersButtons = ({formSubmitHandler, formResetHandler, isResetDisabled}) =>
    (
        <StFilterButton>
            <Button onClick={formSubmitHandler} className="basic-btn" contentKey ="Submit"/>
            <Button onClick={formResetHandler} type="reset" isDisabled={isResetDisabled} className="basic-btn"  contentKey="Reset"/>
        </StFilterButton>
    );

FiltersButtons.propTypes = {
    formSubmitHandler: PropTypes.func.isRequired,
    formResetHandler : PropTypes.func.isRequired,
    isResetDisabled: PropTypes.bool.isRequired
};

export default FiltersButtons;