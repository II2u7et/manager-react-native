import React, {Component} from 'react';
import { Picker } from '@react-native-community/picker';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../action'
import { Card, CardSection, Input, Button, Spinner  } from './common'

class EmployeeCreate extends Component {

    onButtonPress(){
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return(
            <Card>

                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="name" 
                        value={this.props.name} 
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})} 
                        secureTextEntry={false}
                    />
                </CardSection>
                    
                <CardSection>
                <Input 
                        label="Phone No."
                        placeholder="555-555-555" 
                        value={this.props.phone} 
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})} 
                        secureTextEntry={false}
                    />
                </CardSection>

                <CardSection style={{flexDirection: 'column', marginLeft: 20}}>

                    <Text style={style.label}>Shift</Text>

                    <Picker 
                        selectedValue={this.props.shift}
                        onValueChange= {value => this.props.employeeUpdate({prop: 'shift', value})}
                        
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thurday" value="Thurday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />

                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>

            </Card>
        )
    }
}


const style = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

const mapStateToProps = state => {

    const {name, phone, shift} = state.employeeForm;
    
    return {name, phone, shift};

}

export default connect( mapStateToProps, {employeeUpdate, employeeCreate} )(EmployeeCreate);