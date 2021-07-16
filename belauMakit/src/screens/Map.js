import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Map from '../assets/map.png';

const MapScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.bgcontainer}>
                <Image source={Map} style={styles.image}/>
            </View>
            {/* <Text>A map of all the makits in Palau, don't get it twisted</Text>
            <Text>Coming soon homie</Text> */}
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgcontainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0
    },
});