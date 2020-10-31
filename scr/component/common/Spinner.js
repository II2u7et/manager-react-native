import React from 'react';
import {StyleSheet,View, ActivityIndicator} from 'react-native';


const Spinner = ({size}) => {
    return(
        <View style={style.container}>
            <ActivityIndicator size={size ? size : "large"} color='#4285f4'/>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        marginVertical: 5,
        height: 40
    }
})

export { Spinner }