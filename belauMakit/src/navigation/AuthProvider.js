import React, { useState, createContext } from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { verifyVendorRole } from '../../functions/index.js';

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
                        //add alerts here (use .then function/operator)
                    } catch (e) {
                        console.log(e);
                    }
                },
                loginVendor: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                            .then(() => {
                                verifyVendorRole();
                            })

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
                                //add alerts here
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
            }
            }
        >
            {children}
        </AuthContext.Provider >
    )
}