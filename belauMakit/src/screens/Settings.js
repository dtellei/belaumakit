import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const HelpScreen = () => {
    return(
        <View style={styles.container}>
            <Text>I help you you help me we are one big family or whatever barney said</Text>
        </View>
    );
};

export default HelpScreen;