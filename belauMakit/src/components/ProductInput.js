import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { windowHeight } from './Dimensions';

import Entypo from 'react-native-vector-icons/Entypo';

const ProductInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <Entypo name={iconType} size={25} color="#E88832" />
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                placeholder={placeholderText}
                placeholderTextColor="grey"
                {...rest}
            />
        </View>
    );
};

export default ProductInput;

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
    },
});