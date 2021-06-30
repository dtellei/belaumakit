import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from '../components/Dimensions';
import Landing from '../images/TL.png';


import FormButton from '../components/FormButton';


const Landingscreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bgcontainer}>
                <Image source={Landing} style={styles.image} />
            </View>
            <Text style={styles.h1}>Belau Makit</Text>
            <FormButton
                styles={styles.signInButton}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.signInText}>Login</Text>
            </FormButton>
            <FormButton
                style={styles.signUpButton}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>Sign Up</Text>
            </FormButton>
        </View>
    );
};

export default Landingscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgcontainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0
    },
    h1: {
        left: 8,
        color: '#fff',
        fontSize: 120,
        fontWeight: '700',
        fontFamily: 'Amita_700Bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInButton: {
        marginTop: 10,
        width: '90%',
        height: windowHeight / 15,
        backgroundColor: '#FFB400',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    signInText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    signUpButton: {
        marginTop: 20,
        width: '90%',
        height: windowHeight / 15,
        backgroundColor: '#FFF',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    signUpText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111'
    }
});
