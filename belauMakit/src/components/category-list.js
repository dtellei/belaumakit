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
                  horizontal={true}
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
        overflow: 'hidden'
    },
    icon: {
      marginLeft: 12,
    },
    catText: {
      fontSize: 18,
      fontFamily: 'MarkaziText_400Regular',
      fontWeight: '500',
      textAlign: 'center',
      width: 58,
      marginLeft: 8,
      marginRight: 8,
    },
});