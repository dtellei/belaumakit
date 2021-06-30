import React, { useContext, useEffect, useState } from 'react';
import NavigationContext from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { AuthStack } from './AuthStack';
import { AuthContext } from './AuthProvider';



export const Routes = () => {

    const { user, setUser } = useContext(AuthContext);
    const { initializing, setInitializing } = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if(initializing) return null;

    return (
        <NavigationContext>
            { user ? <AppStack/> : <AuthStack />}
        </NavigationContext>
    );
};