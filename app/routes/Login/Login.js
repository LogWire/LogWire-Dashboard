import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    FormText,
    Input,
    CustomInput,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../components';

import { HeaderAuth } from "../components/Pages/HeaderAuth";

const ValidateForm = function (component) {
    return component.state != null && component.state.username.length > 0 && component.state.password.length > 0;
}

const Authenticate = function (event, component) {

    event.preventDefault();

    component.setState({loggingIn: true});

    fetch(process.env.REACT_APP_LW_API + '/auth/login', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'username': component.state.username,
          'password': component.state.password
        },
    }).then(results => {
        return results.json();
    }).then(data => {
        console.log(data);
        if(data.userId === ""){
            
            component.setState({loggingIn: false, error_message: "Error"});
        } else {
            component.props.history.push("/");
        }
    }).catch(error => {
        component.setState({loggingIn: false, error_message: "Error"});
    });
    
}

class Login extends Component {

    constructor(props) {

      super(props);

      this.state = {
        username: "",
        password: "",
        loggingIn: false
      } 

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
                        <Form className="mb-3" onSubmit={(e) => Authenticate(e, this)}>
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
                                    <Button disabled={!ValidateForm(this)} color={ color } block>
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