import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '../config/FirebaseConfig';
import firebase from 'firebase';

export default function SignIn(props, navigation) {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
   
    let login = async => {
        try {
            await firebase.auth().signInWithEmailandPassword(loginEmail, loginPassword);
            firebase.auth().onAuthStateChange(function (user) {
                if (user) {
                    props.updateState(true);
                } else {
                    props.updateState(false);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}