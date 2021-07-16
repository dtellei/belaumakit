import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import FormInput from './FormInput';
import FormButton from './FormButton';

const SearchInput = props => {
    const [searchFood, setSearchFood] = useState('');

    const searchFoodHandler = (enteredFood) => {
        setSearchFood(enteredFood);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.input}>
                <FormInput
                    iconType="search1"
                    placeholder="Search for food, makit, etc."
                    placeholderTextColor="grey"
                    onChange={searchFoodHandler}
                    value={searchFood} 
                />
            </View>
            <View>
                <FormButton buttonTitle="Search" />
            </View>
        </SafeAreaView>
    )
}

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%'
    },
    input:{
        width: '80%',
        paddingLeft: 40
    },
    searchBtn:{
        width: '10%'
    },
});

