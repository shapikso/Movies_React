import React, { Component } from 'react';
import Form from '../common/input/Form';
import Input from '../common/input/InputField';

class SingIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
    }

    handleChangeUser = (value) => this.setState({ user: value });

    handleChangePassword = (value) => this.setState({ password: value});

    handlerSubmitForm = event => {
        event.preventDefault();
        console.log("submit");
    };

    render() {
        console.log(this.state);
        return (
            <Form onSubmit={this.handlerSubmitForm}>
                <div className="fields">
                    <div className="input-wrapper">
                        <Input
                            onChange={this.handleChangeUser}
                            label={"Login"}
                            type={'text'}
                            name={'login'}
                            value={this.state.user}
                            placeholder={'Enter your login'}
                            autocomplete="off"
                        />
                        <Input
                            label={"Password"}
                            type={'password'}
                            name={'password'}
                            value={this.state.password}
                            placeholder={'Enter your password'}
                            autocomplete="off"
                            onChange={this.handleChangePassword}
                        />
                    </div>
                </div>
            </Form>
        );
    }
}

export default SingIn;
