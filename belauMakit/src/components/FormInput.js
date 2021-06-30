import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from './Dimensions';

import AntDesign from 'react-native-vector-icons';

const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <AntDesign name={iconType} size={25} color="#E88832" />
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                fontSize={18}
                {...rest} />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 15,
        marginBottom: 20,
        width: '80%',
        height: windowHeight / 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        marginLeft: 10
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#666',
        justifyContent: 'center',
        alignItems: 'center',
    }
});