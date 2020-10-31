import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({label, placeholder, value, onChangeText, secureTextEntry}) => 
  
        <View style={style.container}>
            <Text style={style.label}>{label}</Text>
            <TextInput 
                value={value}
                onChangeText={onChangeText}
                style={style.input}
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry = {secureTextEntry}
            />
        </View>
   

const style = StyleSheet.create({
    input: {
        color: '#000',
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    label: {
        fontWeight: "bold",
        paddingLeft: 20,
        fontSize: 18,
        flex: 1
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        flex: 1,
         borderBottomWidth: 2,
         justifyContent: "flex-start",
         flexDirection: "row",
         borderColor: '#93d2f3',
         position: 'relative'
    }
})

export {Input};