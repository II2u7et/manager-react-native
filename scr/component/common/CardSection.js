import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const CardSection = (props) => 
    <View style={[style.container, props.style]}>
        {props.children}
    </View>

const style = StyleSheet.create({
    container:{
        // borderBottomWidth: 2,
        padding: 5,
        // backgroundColor: 'white',
        justifyContent: "flex-start",
        flexDirection: "row",
        // borderColor: '#93d2f3',
        position: 'relative'
    }
})

export {CardSection};