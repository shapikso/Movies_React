import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import Form from '../common/Input/Form';
import Input from '../common/Input/InputField';
import { URL_SIGN_IN } from '../../constants/api';
import Button from '../common/Button/Button';
import '../SingIn/SingIn.scss';
import { isValidLogin, isValidPassword } from '../../helpers/validation';

class SingIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            error: {
                user: '',
                password: '',
            },
        };
    }

    handleChangeUser = value => this.setState({ user: value });

    handleChangePassword = value => this.setState({ password: value });

    handleChangePasswordInput = () => {
        const error = isValidPassword(this.state.password);
        this.setState({ error: { ...this.state.error, password: error } });
    };
    handleChangeLoginInput = () => {
        const error = isValidLogin(this.state.user);
        this.setState({ error: { ...this.state.error, user: error } });
    };

    handleSubmitFormSignIn = async event => {
        event.preventDefault();
        try {
            this.setState({ isLoading: true });
            const body = { login: this.state.user, password: this.state.password };
            const { headers } = await axios.post(URL_SIGN_IN, body);
            localStorage.setItem('token', headers.token);
            this.props.history.push('/movies');
        } finally {
            this.setState({ isLoading: false });
        }
    };

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.handleSubmitFormSignIn}>
                    <Input
                        label={'Login'}
                        value={this.state.user}
                        placeholder={'Enter your login'}
                        onChange={this.handleChangeUser}
                        onBlur={this.handleChangeLoginInput}
                        error={this.state.error.user}
                    />
                    <Input
                        label={'Password'}
                        type={'password'}
                        value={this.state.password}
                        placeholder={'Enter your password'}
                        onChange={this.handleChangePassword}
                        onBlur={this.handleChangePasswordInput}
                        error={this.state.error.password}
                    />
                    <Button type="submit" contentKey={'SUBMIT'} isLoading={this.state.isLoading} />
                </Form>
            </div>
        );
    }
}

export default withRouter(SingIn);
