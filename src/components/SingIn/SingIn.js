import React, { Component } from 'react';
import {withRouter} from "react-router";
import axios from 'axios';
import Form from '../common/input/Form';
import Input from '../common/input/InputField';
import { URL_SIGN_IN, MESSAGE_ERROR } from '../../constants/api';
import Button from '../common/Button/Button';
import '../SingIn/SingIn.scss';

class SingIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
        };
    }

    handleChangeUser = value => this.setState({ user: value });

    handleChangePassword = value => this.setState({ password: value });

    handleSubmitFormSignIn = event => {
        console.log(event);
        event.preventDefault();
        const responseSignIn = this.postSignIn();
        if (responseSignIn.token) {
            localStorage.setItem('token', responseSignIn.token);
            this.props.history.push('/movies');
        } else {
            return MESSAGE_ERROR;
        }
    };

    postSignIn = async () => {
        try {
            // helpers.setButtonLoader(domElements.signInButton);
            //возможно валидация
            const body = { login: this.state.user, password: this.state.password };
            const response = await axios.post(URL_SIGN_IN, body);
            const { headers } = response;
            return { token: headers.token };
        }  finally {
            // helpers.removeButtonLoader(domElements.signInButton);
        }
    };

    render() {
        return (
            <div className="container main__container">
                <div className="form-wrapper">
                    <Form onSubmit={this.handleSubmitFormSignIn}>
                        <div className="fields">
                            <div className="input-wrapper">
                                <Input 
                                    label={'Login'} 
                                    type={'text'} 
                                    name={'login'} 
                                    value={this.state.user} 
                                    placeholder={'Enter your login'} 
                                    autocomplete="off" 
                                    onChange={this.handleChangeUser} />
                                <Input
                                    label={'Password'}
                                    type={'password'}
                                    name={'password'}
                                    value={this.state.password}
                                    placeholder={'Enter your password'}
                                    autocomplete="off"
                                    onChange={this.handleChangePassword}
                                />
                                <Button 
                                    type={'button'} 
                                    isDisabled={false} 
                                    className={''} 
                                    onClick={this.handleSubmitFormSignIn} 
                                    contentKey={'SUBMIT'} />
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(SingIn);
