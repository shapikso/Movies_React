import React, { Component } from 'react';
import {StyledForm, WrapperForm} from './SignIn/SignIn.scss';

import { Bubble } from 'styled-components/global-styles-components';
import Input from 'components/common/Input';
import Button from 'components/common/Button';




class SingIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handlerSubmitForm = (event) => {
        event.preventDefault();
        if (state.isValid) {
            onSubmit({ login: state.login, password: state.password });
            setState({...initialState, isClear: true});
        }
    };

    changeFieldsValue = (value, event) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: value,
            isClear: false,
        }));
    };

    handlerBlurInput = (value, event) => {
        changeFieldsValue(value, event);
    };

    handlerKeyDownInput = (value, event) => {
        if (event.code === 'Enter') changeFieldsValue(value, event);
    };

    return (
            <WrapperForm>
                <Bubble>
                    <StyledForm name='signInForm' onSubmit={handlerSubmitForm}>
                        <Input
                            type={InputTypes.text}
                            name='login'
                            label={intl.formatMessage({ id: idMessages.loginLabel })}
                            placeholder={intl.formatMessage({ id: idMessages.loginPlaceholder })}
                            image={login}
                            onBlur={handlerBlurInput}
                            onKeyDown={handlerKeyDownInput}
                            isClear={state.isClear}
                            error={state.loginError}
                        />
                        <Input
                            type={InputTypes.password}
                            name='password'
                            label={intl.formatMessage({ id: idMessages.passwordLabel })}
                            placeholder={intl.formatMessage({ id: idMessages.passwordPlaceholder })}
                            image={lock}
                            onBlur={handlerBlurInput}
                            onKeyDown={handlerKeyDownInput}
                            isClear={state.isClear}
                            error={state.passwordError}
                        />
                        <Button type={ButtonTypes.submit}>
                            <FormattedMessage id={idMessages.signIn} />
                        </Button>
                    </StyledForm>
                </Bubble>
            </WrapperForm>
    );
}

export default SingIn;
