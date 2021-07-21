import React, { useState, createContext } from 'react';
import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export const ProductContext = createContext({})

export const ProductProvider = ({ children }) => {
    
    const [product, setProduct] = useState(null);

    return (
        <ProductContext.Provider
            value={{
                product,
                setProduct,
                addProduct: async (itemName, price, vendorContactNumber, vendorName, vendorPermitNumber, itemDescription) =>{
                    try {
                        await firestore().collection('products')
                        .add({
                            itemName: itemName,
                            price: price,
                            vendorName: vendorName,
                            vendorContactNumber: vendorContactNumber,
                            vendorPermitNumber: vendorPermitNumber,
                            itemDescription: itemDescription,
                            dateCreated: firestore.Timestamp.fromDate(new Date()),
                        })
                        .then(() => {
                            console.log('Product Added')
                            Alert.alert("Product Added");
                        })
                    } catch (e){
                        console.log(e);
                    }
                },
                deleteProdcut: async() =>{
                    try{
                        await firestore().collection('products').doc()
                    } catch(e){
                        console.log(e);
                    }
                }
            }
            }
        >
            {children}
        </ProductContext.Provider>
    )
}