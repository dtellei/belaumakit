import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute, DrawerActions, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Onboarding from '../screens/Onboarding';
import Landing from '../screens/Landing';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch) {
        routeName = 'Onboarding'; // replace with onboarding
    } else {
        routeName = 'Landing';
    }
    return (
        <Stack.Navigator initialRoute={routeName}>
            <Stack.Screen
                name='Onboarding'
                component={Onboarding}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUp}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#fff',
                        shadowColor: '#fff',
                        elevation: 0,
                    },
                    headerLeft: () => (
                        <View style={{ marginLeft: 30, marginTop: 30 }}>
                            <AntDesign name='arrowleft' size={30}
                                backgroundColor='#fff'
                                color='#333' outline='none'
                                onPress={() => navigation.navigate('Login')}
                            />
                            <Text style={{ fontSize: 20, flexDirection: 'row' }}>Login</Text>
                        </View>
                    )
                })}
            />
            <Stack.Screen
                name='Landing'
                component={Landing}
                options={{ header: () => null }}
            />
        </Stack.Navigator>
    )
}
export default AuthStack;