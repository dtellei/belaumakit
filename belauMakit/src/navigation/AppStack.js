import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getFocusedRouteNameFromRoute, DrawerActions, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../navigation/AuthProvider';

import HomeScreen from '../screens/Home';
import MapScreen from '../screens/Map';
import OrdersScreen from '../screens/Orders';
import SettingsScreen from '../screens/Settings';
import ProductUploadScreen from '../screens/UploadProducts';
import LogoutScreen from '../screens/Logout';
import CartScreen from '../screens/Cart';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const AppStack = () => {

    return (
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

            <Stack.Screen
                name='Cart'
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
                                onPress={() => navigation.navigate('Belau Makit')}
                            />
                        </View>
                    ),
                })}>
                {(props) => (
                    <CartScreen />
                )}
            </Stack.Screen>

        </Stack.Navigator>
    )
}

const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Belau Makit">

            <Drawer.Screen
                name="Belau Makit"
                component={HomeScreen}
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
                name="Maps"
                component={MapScreen}
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
                component={OrdersScreen}
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
                component={SettingsScreen}
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
                name="Products"
                component={ProductUploadScreen}
                options={{
                    title: 'Products',
                    drawerIcon: ({ focused }) => (
                        <Ionicons
                            name="basket-outline"
                            size={25}
                            color={focused ? '#7cc' : '#E88832'}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Logout"
                component={LogoutScreen}
                options={{
                    title: 'Logout',
                    drawerIcon: ({ focused }) => (
                        <AntDesign
                            name="logout"
                            size={25}
                            color={focused ? '#7cc' : '#E88832'}

                        />
                    ),
                }}
            />

        </Drawer.Navigator>
    );
};

export default AppStack;