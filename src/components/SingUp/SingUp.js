import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import Form from '../common/Input/Form';
import Input from '../common/Input/InputField';
import Button from '../common/Button/Button';
import { URL_SIGN_UP } from '../../constants/api';
import { isValidLogin, isValidName, isValidPassword } from '../../helpers/validation';
import { normalizeFilters } from '../../helpers/format';

class SingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            isLoading: false,
            error: {
                firstName: '',
                lastName: '',
                userName: '',
                password: '',
            },
        };
    }

    handleChangeFirstName = value => this.setState({ firstName: value });

    handleChangeLastName = value => this.setState({ lastName: value });

    handleChangeLogin = value => this.setState({ userName: value });

    handleChangePassword = value => this.setState({ password: value });

    // setFilter = (key,value) => this.setState({filters : {...this.state.filters,[key]: value}});

    handleChangeFirstNameInput = () => {
        const error = isValidName(this.state.firstName);
        this.setState({ error: { ...this.state.error, firstName: error } });
    };
    handleChangeLastNameInput = () => {
        const error = isValidName(this.state.lastName);
        this.setState({ error: { ...this.state.error, lastName: error } });
    };
    handleChangePasswordInput = () => {
        const error = isValidPassword(this.state.password);
        this.setState({ error: { ...this.state.error, password: error } });
    };
    handleChangeLoginInput = () => {
        const error = isValidLogin(this.state.userName);
        this.setState({ error: { ...this.state.error, userName: error } });
    };

    handleSubmitFormSignUp = async event => {
        event.preventDefault();
        if (Object.keys(normalizeFilters(this.state.error)).length || !this.state.password) return;
        try {
            this.setState({ isLoading: true });
            const body = {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                login: this.state.userName,
                password: this.state.password,
            };
            const response = await axios.post(URL_SIGN_UP, body);
            const { headers } = response;
            this.props.history.push('/');
            return { status: headers.status };
        } finally {
            this.setState({ isLoading: false });
        }
    };

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.handleSubmitFormSignUp}>
                    <Input
                        label={'First Name'}
                        value={this.state.firstName}
                        placeholder={'Enter your first name'}
                        onChange={this.handleChangeFirstName}
                        onBlur={this.handleChangeFirstNameInput}
                        error={this.state.error.firstName}
                    />
                    <Input
                        label={'Last Name'}
                        value={this.state.lastName}
                        placeholder={'Enter your last name'}
                        onChange={this.handleChangeLastName}
                        onBlur={this.handleChangeLastNameInput}
                        error={this.state.error.lastName}
                    />
                    <Input
                        label={'Login'}
                        value={this.state.userName}
                        placeholder={'Enter your login'}
                        onChange={this.handleChangeLogin}
                        onBlur={this.handleChangeLoginInput}
                        error={this.state.error.userName}
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

export default withRouter(SingUp);
