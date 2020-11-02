import React, {Component} from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Confirm, Button  } from './common';
import {employeeUpdate, employeeSave, employeeDelete} from '../action';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component{

    state = { showModal: false}
    componentDidMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress(){
         const {name, phone, shift} = this.props;

         this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }

    onTextPresss(){
        const { name, phone, shift } = this.props;

        Communications.text(phone, `Hi ${name}, \n Your upcomming shift is on ${shift}!`)
    }

    onAccept(){

        const {uid} = this.props.employee

        this.props.employeeDelete({uid})

    }

    onDecline() {
        this.setState({showModal: false})
    }

    render () {
        return(
            <Card>

                <EmployeeForm  {...this.props}/>

                <CardSection>
                    <Button onPress={ this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress ={ this.onTextPresss.bind(this)}>
                        Send Update Shift Message
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress ={ () => this.setState({showModal: !this.state.showModal})}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to fire this staff?
                </Confirm>
            </Card>
    
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
}

export default connect(mapStateToProps,{employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);