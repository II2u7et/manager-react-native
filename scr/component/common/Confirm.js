import React, { Children } from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({children, visible, onAccept, onDecline}) => {

    const { container, text, cardSection} = style;
    return (
        <Modal 
            animationType="slide"
            onRequestClose={ () => {}}
            transparent
            visible={visible}
        >
            <View style={container}>
                <CardSection style={cardSection}>
                    <Text style={text}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection style={cardSection}>
                    <Button onPress={onDecline}>
                        No
                    </Button>

                    <Button onPress={onAccept}>
                        Yes
                    </Button>
                </CardSection>
            </View>
        </Modal>
    )

};

const style = StyleSheet.create({
    cardSection:{
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        flex:1,
        textAlign: 'center',
        lineHeight: 35,
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        padding:20
    }

})

export  { Confirm }