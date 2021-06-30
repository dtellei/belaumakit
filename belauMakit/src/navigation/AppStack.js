import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute, DrawerActions, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign, Entypo, Ionicons } from 'react-native-vector-icons';
import { AuthContext } from '../navigation/AuthProvider';

import Home from '../screens/Home';
import Map from '../screens/Map';
import Orders from '../screens/Orders';
import Settings from '../screens/Settings';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const { logout } = useContext(AuthContext);

const AppStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Belau Makit"
                    component={AppDrawer}
                    options={({ route, navigation }) => ({
                        headerTitle: getFocusedRouteNameFromRoute(route),
                        headerLeft: () => (
                            <View style={{ marginLeft: 20 }}>
                                <Entypo
                                    name="menu"
                                    size={40}
                                    color="#FFB400"
                                    backgroundColor="#fff"
                                    title=""
                                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                                />
                            </View>
                        ),
                        headerRight: () => (
                            <View style={{ marginRight: 20 }}>
                                <AntDesign
                                    name="shoppingcart"
                                    size={35}
                                    color="#FFB400"
                                    backgroundColor="#fff"
                                    title=""
                                    onPress={() => navigation.navigate('Cart')} />
                            </View>
                        ),
                        title: "Belau Makit",
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 26,
                            alignSelf: 'center'
                        },
                        headerStyle: {
                            height: 100,
                            shadowColor: 'transparent'
                        }
                    })}
                />

                <Stack.Screen
                    name='Products'
                    options={({ navigation }) => ({
                        title: '',
                        headerStyle: {
                            backgroundColor: '#fff',
                            shadowColor: '#fff',
                            elevation: 0,
                        },
                        headerLeft: () => (
                            <View style={{ marginLeft: 20 }}>
                                <AntDesign
                                    name='arrowleft'
                                    size={30}
                                    backgroundColor='#fff'
                                    color='#333' outline='none'
                                    onPress={() => navigation.navigate('Home')}
                                />
                            </View>
                        ),
                    })}>
                    {(props) => (
                        <HomeScreen {...props} onPress={() => navigation.navigate('Product')} />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">

            <Drawer.Screen
                name="Belau Makit"
                component={Home}
                options={{
                    title: 'Belau Makit',
                    drawerIcon: ({ focused }) => (
                        <Ionicons
                            name="ios-home-outline"
                            size={25}
                            color={focused ? '#7cc' : '#E88832'}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Map"
                component={Map}
                options={{
                    title: 'Map',
                    drawerIcon: ({ focused }) => (
                        <Ionicons
                            name="map-outline"
                            size={25}
                            color={focused ? '#7cc' : '#E88832'}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Orders"
                component={Orders}
                options={{
                    title: 'Orders',
                    drawerIcon: ({ focused }) => (
                        <Ionicons
                            name="ios-receipt-outline"
                            size={25}
                            color={focused ? '#7cc' : '#E88832'}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: 'Settings',
                    drawerIcon: ({ focused }) => (
                        <Ionicons
                            name="settings-outline"
                            size={25}
                            color={focused ? '#7cc' : '#E88832'}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Logout"
                component={Logout}
                options={{
                    title: 'Logout',
                    drawerIcon: ({ focused }) => (
                        <AntDesign
                            name="logout"
                            size={25}
                            color={focused ? '#7cc' : '#E88832'}
                            onPress={() => logout()}
                        />
                    ),
                }}
            />

        </Drawer.Navigator>
    );
};