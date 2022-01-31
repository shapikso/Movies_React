import React from 'react';
import Button from "../../../common/Button/Button";
import PropTypes from "prop-types";

const FiltersButtons = ({formSubmitHandler, formResetHandler, closeModal}) =>
    (
        <div className="form-filters__buttons">
            <Button onClick={formSubmitHandler} className="basic-btn" contentKey ="Submit"/>
            <Button onClick={formResetHandler} type="reset" className="basic-btn"  contentKey="Reset"/>
            <span onClick={closeModal} className="close">x</span>
        </div>
    );

FiltersButtons.propTypes = {
    formSubmitHandler: PropTypes.func.isRequired,
    formResetHandler : PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default FiltersButtons;