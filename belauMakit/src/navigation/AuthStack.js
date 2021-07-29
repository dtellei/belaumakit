import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';


import SignIn from '../screens/SignIn';
import SignInVendor from '../screens/SignInVendor';
import SignUp from '../screens/SignUp';
import OnboardingScreen from '../screens/Onboarding';
import LandingScreen from '../screens/Landing';


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
                component={OnboardingScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name='SignInVendor'
                component={SignInVendor}
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
                                onPress={() => navigation.navigate('SignIn')}
                            />
                            <Text style={{ fontSize: 20, flexDirection: 'row' }}>Login</Text>
                        </View>
                    )
                })}
            />
            <Stack.Screen
                name='Landing'
                component={LandingScreen}
                options={{ header: () => null }}
            />

        </Stack.Navigator>
    )
}
export default AuthStack;