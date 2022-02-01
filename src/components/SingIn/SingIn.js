import React, { Component } from 'react';
import {withRouter} from "react-router";
import axios from 'axios';
import Form from '../common/Input/Form';
import Input from '../common/Input/InputField';
import { URL_SIGN_IN} from '../../constants/api';
import Button from '../common/Button/Button';
import '../SingIn/SingIn.scss';
import {isValidLogin, isValidPassword} from '../../helpers/validation';

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

    handleChangePasswordInput = () =>{
        const error = isValidPassword(this.state.password);
        this.setState({error: {...this.state.error,password: error}});
    }
    handleChangeLoginInput = () =>{
        const error = isValidLogin(this.state.user);
        this.setState({error: {...this.state.error,user: error}});
    }

    handleSubmitFormSignIn = async (event) => {
        event.preventDefault();
        try {
            // helpers.setButtonLoader(domElements.signInButton);
            //возможно валидация
            const body = { login: this.state.user, password: this.state.password };
            const {headers} = await axios.post(URL_SIGN_IN, body);
            localStorage.setItem('token', headers.token);
            this.props.history.push('/movies');
        } catch (error){
            console.log(error);
        } finally {
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
                                    onChange={this.handleChangeUser}
                                    onBlur={this.handleChangeLoginInput}
                                    error={this.state.error.user}
                                />
                                <Input
                                    label={'Password'}
                                    type={'password'}
                                    name={'password'}
                                    value={this.state.password}
                                    placeholder={'Enter your password'}
                                    autocomplete="off"
                                    onChange={this.handleChangePassword}
                                    onBlur={this.handleChangePasswordInput}
                                    error={this.state.error.password}
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
