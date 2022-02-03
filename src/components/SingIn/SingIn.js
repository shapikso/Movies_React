import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Form from '../common/Input/Form';
import Input from '../common/Input/InputField';
import Button from '../common/Button/Button';
import {URL_SIGN_IN} from '../../constants/api';
import '../SingIn/SingIn.scss';
import {isValidLogin, isValidPassword} from '../../helpers/validation';
import {StWrapper} from "./styled";

const SingIn = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        user: '',
        isLoading: false,
        password: '',
        error: {
            user: '',
            password: '',
        }
    }
    );

    const handleChangeUser = value => setState({...state, user: value});

    const handleChangePassword = value => setState({...state, password: value});

    const handleChangePasswordInput = () => {
        const error = isValidPassword(state.password);
        setState({...state, error: {...state.error, password: error}});
    };

    const handleChangeLoginInput = () => {
        const error = isValidLogin(state.user);
        setState({...state, error: {...state.error, user: error}});
    };

    const handleSubmitFormSignIn = async event => {
        event.preventDefault();
        try {
            setState({...state, isLoading: true});
            const body = {login: state.user, password: state.password};
            const {headers} = await axios.post(URL_SIGN_IN, body);
            localStorage.setItem('token', headers.token);
            navigate('/movies');
        } finally {
            setState({...state, isLoading: false});
        }
    };

    return (
        <StWrapper>
            <Form onSubmit={handleSubmitFormSignIn}>
                <Input
                    label="Login"
                    value={state.user}
                    placeholder="Enter your login"
                    onChange={handleChangeUser}
                    onBlur={handleChangeLoginInput}
                    error={state.error.user}
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
        </StWrapper>
    );
};

export default SingIn;

