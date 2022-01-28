import React, { Component } from 'react';
import Form from '../common/input/Form';
import Input from '../common/input/InputField';
import Button from '../common/Button/Button';

class SingIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handlerSubmitForm = event => {
        event.preventDefault();
        if (state.isValid) {
            onSubmit({ login: state.login, password: state.password });
            setState({ ...initialState, isClear: true });
        }
    };

    changeFieldsValue = (value, event) => {
        setState(prevState => ({
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

    render() {
        return (
            <Form className="form frosted-glass-effect" id="form-signin">
                <div className="fields">
                    <div className="input-wrapper">
                        <Input
                            // label={intl.formatMessage({ id: idMessages.loginLabel })}
                            id={'signin__login'}
                            type={'text'}
                            name={'login'}
                            value={''}
                            classNameInput={'input-wrapper__input input-login input-register'}
                            placeholder={'Enter your login'}
                            // onBlur={handlerBlurInput}
                            // onKeyDown={handlerKeyDownInput}
                            // image={login}
                            // isClear={state.isClear}
                            // error={state.loginError}
                        />
                        <Input
                            // label={intl.formatMessage({ id: idMessages.loginLabel })}
                            id={'signin__password'}
                            type={'password'}
                            name={'password'}
                            value={''}
                            classNameInput={'input-wrapper__input input-password input-register'}
                            placeholder={'Enter your password'}
                            // onBlur={handlerBlurInput}
                            // onKeyDown={handlerKeyDownInput}
                            // image={login}
                            // isClear={state.isClear}
                            // error={state.loginError}
                        />
                        <Button type={ButtonTypes.submit}>
                            <FormattedMessage id={idMessages.signIn} />
                        </Button>
                    </div>
                </div>
            </Form>
        );
    }
}

export default SingIn;
