import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Platform, TouchableNativeFeedback, FlatList} from 'react-native';
import { CATEGORIES } from '../data/testData';

const CategoryList = props => {
    let TouchableComp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >=21) {
        TouchableComp = TouchableNativeFeedback;
    }
    return(
        <View style={styles.category}>
                <FlatList
                  numColumns={8}
                  keyExtractor={(item) => item.id}
                  data={CATEGORIES}
                  renderItem={({ item }) => (
                    <TouchableComp>
                      <View>
                        <Text style={styles.icon}>{item.image}</Text>
                        <Text style={styles.catText}>{item.title}</Text>
                      </View>
                    </TouchableComp>
                  )}
                />
        </View>
    );
};

export default CategoryList;

const styles = StyleSheet.create({
    category: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#111',
        shadowOpacity: 0,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

