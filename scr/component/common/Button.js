import React, {Children} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginHorizontal: 5,
    paddingVertical: 5,
    marginTop: 15
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export  {Button};
