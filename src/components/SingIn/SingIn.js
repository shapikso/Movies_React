import React, { Component } from 'react';
import Form from '../common/input/Form';
import Input from '../common/input/InputField';
// import Button from '../common/Button/Button';

class SingIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
    }

    handleChangeUser = (value) => {
        // console.log(event);
        this.setState({ user: value });
    }

    handleChangePassword = (value) => {
        // console.log(event);
        this.setState({ password: value});
    }

    handlerSubmitForm = event => {
        event.preventDefault();
        console.log("submit");
        // onSubmit({ login: state.login, password: state.password });
        // setState({ ...initialState, isClear: true });
    };

    // changeFieldsValue = (value, event) => {
    //     setState(prevState => ({
    //         ...prevState,
    //         [event.target.name]: value,
    //         isClear: false,
    //     }));
    // };

    // handlerBlurInput = (value, event) => {
    //     changeFieldsValue(value, event);
    // };

    // handlerKeyDownInput = (value, event) => {
    //     if (event.code === 'Enter') changeFieldsValue(value, event);
    // };

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
                            // onBlur={this.props.onBlur}
                            // onKeyDown={this.propsonKeyDown}
                            // onBlur={handlerBlurInput}
                            // onKeyDown={handlerKeyDownInput}
                            // image={login}
                            // isClear={state.isClear}
                            // error={state.loginError}
                        />
                        <Input
                            label={"Password"}
                            type={'password'}
                            name={'password'}
                            value={this.state.password}
                            placeholder={'Enter your password'}
                            autocomplete="off"
                            // onBlur={this.props.onBlur}
                            // onKeyDown={this.propsonKeyDown}
                            onChange={this.handleChangePassword}
                            // onBlur={handlerBlurInput}
                            // onKeyDown={handlerKeyDownInput}
                            // image={login}
                            // isClear={state.isClear}
                            // error={state.loginError}
                        />
                        {/* <Button type={ButtonTypes.submit}>
                            <FormattedMessage id={idMessages.signIn} />
                        </Button> */}
                    </div>
                </div>
            </Form>
        );
    }
}

export default SingIn;

// import React, { Component } from 'react';
// import Form from '../common/input/Form';
// import Input from '../common/input/InputField';
// import Button from '../common/Button/Button';

// class SingIn extends Component{
//     constructor(props) {
//         super(props);
//          this.state = {};
//     }

//     onSubmit=(e)=>{
//         e.preventDefault();

//     }
//     render() {
//         return(
//         <Form children={this.props.children} onSubmit={this.onSubmit} />
//         )}
// }
// export default SingIn;