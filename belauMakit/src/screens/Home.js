import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import MakitList from '../components/makit-list';
import CategoryList from '../components/category-list';
import SearchInput from '../components/SearchInput';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.searchContainer}>
        <SearchInput />
      </View>

      <View style={styles.category}>
        <CategoryList />
      </View>

      <View style={styles.makitContainer}>
        <MakitList />
      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  category: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 5,
    marginRight: 5,
  },
  searchContainer: {
    flex: 0.25,
    justifyContent: 'center',
  },
  makitContainer: {
    flex: 1
  }
});
