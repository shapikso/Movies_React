import React from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import Form from '../common/Input/Form';
import Input from '../common/Input/InputField';
import Button from '../common/Button/Button';
import { URL_SIGN_UP } from '../../constants/api';
import { isValidLogin, isValidName, isValidPassword } from '../../helpers/validation';
import { normalizeFilters } from '../../helpers/format';
import {useState} from 'react';
import {StFormSignUp} from './styled';

const SingUp  = () => {

    const [state, setState] = useState({redirect: false,
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
        }
    });

    const handleChangeFirstName = value => setState({...state, firstName: value});
    const handleChangeLastName = value => setState({...state, lastName: value});
    const handleChangeLogin = value => setState({...state, userName: value});
    const handleChangePassword = value => setState({...state, password: value});

    const handleBlurFirstNameInput = () => {
        const error = isValidName(state.firstName);
        setState({ ...state, error: { ...state.error, firstName: error } });
    };
    const handleChangeLastNameInput = () => {
        const error = isValidName(state.lastName);
        setState({ ...state, error: { ...state.error, lastName: error } });
    };
    const handleChangePasswordInput = () => {
        const error = isValidPassword(state.password);
        setState({ ...state, error: { ...state.error, password: error } });
    };
    const handleChangeLoginInput = () => {
        const error = isValidLogin(state.userName);
        setState({ ...state, error: { ...state.error, userName: error } });
    };

    const handleSubmitFormSignUp = async event => {
        event.preventDefault();
        if (Object.keys(normalizeFilters(state.error)).length || !state.password) return;
        try {
            setState({ ...state , isLoading: true });
            const body = {
                first_name: state.firstName,
                last_name: state.lastName,
                login: state.userName,
                password: state.password,
            };
            const response = await axios.post(URL_SIGN_UP, body);
            const { headers } = response;
            setState({...state ,redirect:true});
            return { status: headers.status };
        } finally {
            setState({...state, isLoading: false });
        }
    };


    if (state.redirect) {
        return <Navigate to={'/'} />;
    }
    return (
        <StFormSignUp>
            <Form onSubmit={handleSubmitFormSignUp}>
                <Input
                    label="First Name"
                    value={state.firstName}
                    placeholder="Enter your first name"
                    onChange={handleChangeFirstName}
                    onBlur={handleBlurFirstNameInput}
                    error={state.error.firstName}
                />
                <Input
                    label="Last Name"
                    value={state.lastName}
                    placeholder="Enter your last name"
                    onChange={handleChangeLastName}
                    onBlur={handleChangeLastNameInput}
                    error={state.error.lastName}
                />
                <Input
                    label="Login"
                    value={state.userName}
                    placeholder="Enter your login"
                    onChange={handleChangeLogin}
                    onBlur={handleChangeLoginInput}
                    error={state.error.userName}
                />
                <Input
                    label="Password"
                    type="password"
                    value={state.password}
                    placeholder="Enter your password"
                    onChange={handleChangePassword}
                    onBlur={handleChangePasswordInput}
                    error={state.error.password}
                />
                <Button type="submit" contentKey="SUBMIT" isLoading={state.isLoading} />
            </Form>
        </StFormSignUp>
    );

};

export default SingUp;
