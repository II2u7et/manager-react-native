import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {CardSection} from './common';

class ListItem extends Component {
    render() {
       
        const {name} = this.props.employee;

        return(
            <CardSection  style={style.box}>
                <Text style={style.title}>
                    {name}
                </Text>
            </CardSection>
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