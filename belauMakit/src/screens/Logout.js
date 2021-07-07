import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';


const LogoutScreen = () => {

    const { logout } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text>Are you sure you want to logout?</Text>
            <FormButton 
            buttonTitle="Logout"
            onPress={()=> logout()}
            />
        </View>
    );
};

export default LogoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
