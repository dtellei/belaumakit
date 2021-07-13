import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchInput = props => {
    const [ searchFood, setSearchFood ] = useState('');

    const searchFoodHandler = (enteredFood) => {
        setSearchFood(enteredFood);
    };
    return(
        <View style={styles.search}>
            <TextInput 
                placeholder="Search for food, makit, etc."
                style={styles.input}
                onChange={searchFoodHandler}
                value={searchFood}/>
            <Button title="Search"/>
        </View>
    )
}

export default SearchInput;

const styles = StyleSheet.create({
    search: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        justifyContent: 'center'
    }
});

