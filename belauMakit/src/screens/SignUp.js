import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '../config/FirebaseConfig';
import firebase from 'firebase';

export default function SignUp(props, navigation) {
    const [signUpName, setSignUpName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    let register = async => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword);
            if (response.user) {
                const user = firebase.auth().curentUser;
                var userDocRef = firestore.doc('uesrs/' + user.id);

                userDocRef.set({
                    name: signUpName
                });
                props.updateStatus(true);
            }
        } catch (error) {
            console.log(error)
        }
    }







}