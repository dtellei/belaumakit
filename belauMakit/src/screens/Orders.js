import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const OrdersScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Order here or something like that, idrk honestly</Text>
        </View>
    );
};

export default OrdersScreen;