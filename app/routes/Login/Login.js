import React, {useState, Component } from 'react';
import { Authenticate, CheckLogin } from "../../components/Authentication/auth";

import {
    Form,
    FormGroup,
    Input,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";

const ValidateForm = function (username, password) {
    if(typeof username === 'undefined' && typeof password === 'undefined'){
         return false;
    }
    return username.length > 0 && password.length > 0;
}
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            loggingIn: false,
            errorMessage: ""
            };
    }

    componentWillMount() {
        CheckLogin(this.props);
    }

    render() {

        if(!this.state.loggingIn) {
            return (
                <EmptyLayout>
                    <EmptyLayout.Section center>
                        { /* START Header */}
                        <HeaderAuth 
                            title="Sign In to Application"
                            text="Please sign in with your username and password to access the logwire system"
                        />
                        { /* END Header */}
                        { /* START Form */}
                        <Form className="mb-3" onSubmit={(e) => Authenticate(e, this, this.props)}>
                            <FormGroup>
                                <Label for="username">
                                    Username
                                </Label>
                                <Input type="text" name="email" id="username" placeholder="Enter username..." className="bg-white" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">
                                    Password
                                </Label>
                                <Input type="password" name="password" id="password" placeholder="Password..." className="bg-white" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
                            </FormGroup>
                            <br/>
                            <ThemeConsumer>
                            {
                                ({ color }) => (
                                    <Button disabled={!ValidateForm(this.state.username, this.state.password)} color={ color } block>
                                        Sign In
                                    </Button>
                                )
                            }
                            </ThemeConsumer>
                        </Form>
                        { /* END Form */}
                    </EmptyLayout.Section>
                </EmptyLayout>
            )
        } else {
            return (
                <EmptyLayout>
                    <EmptyLayout.Section center>
                        <h5 className="text-center mb-4">
                            Logging In ...
                        </h5>
                    </EmptyLayout.Section>
                </EmptyLayout>
            )
        }

    }

}

export default Login;