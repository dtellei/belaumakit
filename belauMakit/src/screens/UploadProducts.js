import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

import ProductInput from '../components/ProductInput'
import FormButton from '../components/FormButton'
import { AuthContext } from '../navigation/AuthProvider';

const ProductUploadScreen = ({ navigation }) => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');


    const { addProduct } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Upload Products Here</Text>
            <ScrollView backgroundColor='#FFF' contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.productContainer}>
                    <ProductInput
                        labelValue={itemName}
                        onChangeText={(name) => setItemName(name)}
                        placeholderText="Item Name"
                        iconType="list"
                        keyboardType="default"
                        autoCapitalize="words"
                        autoCorrect={false}
                    />

                    {/* Insert Text Field for item description */}

                    <ProductInput
                        labelValue={price}
                        onChangeText={(itemPrice) => setPrice(itemPrice)}
                        placeholderText="Price"
                        iconType="price-tag"
                        keyboardType="default"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormButton
                        buttonTitle="Upload Product"
                        onPress={() => addProduct(itemName, price)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

export default ProductUploadScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF'
    },
    productContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    header: {
        fontSize: 28,
        marginBottom: 10,
        color: '#000',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    navButton: {
        marginTop: 15
    },  
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center'
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: '#f194ff'
    },
    buttonClose: {
        backgroundColor: '#2196f3'
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
});