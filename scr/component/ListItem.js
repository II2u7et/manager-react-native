import React, {Component} from 'react';
import {Text, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {CardSection} from './common';

class ListItem extends Component {

    onRowPress(){
        Actions.employeeEdit({employee: this.props.employee})
    }

    render() {
       
        const {name} = this.props.employee;

        return(
           <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
               <View style={style.box}>
                    <CardSection>
                        <Text style={style.title}>
                            {name}
                        </Text>
                    </CardSection>
               </View>
           </TouchableWithoutFeedback>
        )
    }
}

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15
    },
    box: {
        borderBottomWidth: 2,
        borderColor: '#93d2f3',
    }
})

export default ListItem;