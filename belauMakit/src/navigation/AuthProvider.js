import React, { useState, useEffect, createContext } from 'react';
import { View, Text } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password, name, contact) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                            .then(() => {
                                firestore().collection('users').doc(auth().currentUser.uid)
                                    .set({
                                        name: name,
                                        contact: contact,
                                        email: email,
                                        dateCreated: firestore.Timestamp.fromDate(new Date()),
                                    })
                            })  

                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                },
                addProduct: async (itemName, price) =>{
                    try {
                        await firestore().collection('products').doc(auth().currentUser.uid)
                        .set({
                            itemName: itemName,
                            price: price,
                            dateCreated: firestore.Timestamp.fromDate(new Date()),
                        })
                    } catch (e){
                        console.log(e);
                    }
                }
            }
            }
        >
            {children}
        </AuthContext.Provider >
    )
}