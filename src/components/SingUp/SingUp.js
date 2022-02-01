import React, {Component} from 'react';
import {withRouter} from "react-router";
import axios from 'axios';
import Form from '../common/input/Form';
import Input from '../common/input/InputField';
import Button from '../common/Button/Button';
import { URL_SIGN_UP } from '../../constants/api';

class SingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: ''
        };
    }
    handleChangeFirstName = value => this.setState({ firstName: value });

    handleChangeLastName = value => this.setState({ lastName: value });

    handleChangeLogin = value => this.setState({ userName: value });

    handleChangePassword = value => this.setState({ password: value });

    // setFilter = (key,value) => this.setState({filters : {...this.state.filters,[key]: value}});

    handleSubmitFormSignUp = event =>  {
        console.log(event);
        event.preventDefault();
        const responseSignUp = this.postSignUp();
        if (responseSignUp.status === '200') {
            this.props.history.push('/movies');
        }
    }
    
    postSignUp = async () => {
        try {
            const body = { firstName: this.state.firstName, lastName: this.state.lastName, userName: this.state.userName,password: this.state.password };
            const response = await axios.post(URL_SIGN_UP, body);
            const { headers } = response;
            return { status: headers.status };
        } catch (error) {
            return error;
        }    
    }

    render() {
        console.log(this.state);
        return (
            <div className="container main__container">
                <div className="form-wrapper">
                    <Form onSubmit={this.handleSubmitFormSignIn}>
                        <div className="fields">
                            <div className="input-wrapper">
                                <Input 
                                    label={'First Name'} 
                                    type={'text'} 
                                    name={'First Name'} 
                                    value={this.state.firstName} 
                                    placeholder={'Enter your login'} 
                                    autocomplete="off" 
                                    onChange={this.handleChangeFirstName} />
                                <Input
                                    label={'Last Name'}
                                    type={'text'}
                                    name={'Last Name'}
                                    value={this.state.LastName}
                                    placeholder={'Enter your password'}
                                    autocomplete="off"
                                    onChange={this.handleChangeLastName}
                                />
                                <Input
                                    label={'Login'}
                                    type={'text'}
                                    name={'Login'}
                                    value={this.state.userName}
                                    placeholder={'Enter your password'}
                                    autocomplete="off"
                                    onChange={this.handleChangeLogin}
                                />
                                <Input
                                    label={'Password'}
                                    type={'password'}
                                    name={'Password'}
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

export default withRouter(SingUp);