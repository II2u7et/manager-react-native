import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Card = (props) => 
    <View style={style.container}>
        {props.children}
    </View>

const style = StyleSheet.create ({
    container: {
        // borderWidth: 1,
        // borderRadius: 2,
        // borderColor: '#4285f4',
      
        // shadowColor: '#007dba',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 1,
        // marginHorizontal: 5,
        // marginTop: 10
    }
})

export {Card};