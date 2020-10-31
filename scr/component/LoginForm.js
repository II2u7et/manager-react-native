import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect  } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../action';
import { Card, CardSection, Input, Button, Spinner  } from './common'

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const { email, password } = this.props;

        this.props.loginUser({ email, password })
    }

    renderError(){
        if(this.props.error){
            return(
                <View>
                    <Text style={style.error}>{this.props.error}</Text>
                </View>
            )
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
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

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}


const style = StyleSheet.create({
    error: {
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 15
    }
})

const mapStateToProps = state => {
    const {email, password, error, loading} = state.auth;

    return {email, password, error, loading};
};

export default  connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);