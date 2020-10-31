import React, {Component} from 'react';
import { connect  } from 'react-redux';
import {emailChanged, passwordChanged} from '../action';
import { Card, CardSection, Input, Button  } from './common'

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="user@mail.com" 
                        value={this.props.email} 
                        onChangeText={this.onEmailChange.bind(this)} 
                        secureTextEntry={false}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Password"
                        placeholder="password" 
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this) } 
                        secureTextEntry={true}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password
    };
};

export default  connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);