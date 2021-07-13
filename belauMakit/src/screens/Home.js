import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';


import MakitList from '../components/makit-list';
import CategoryList from '../components/category-list';
import SearchInput from '../components/SearchInput';
import { windowWidth, windowHeight } from '../components/Dimensions';
import { CATEGORIES, MAKIT } from '../data/testData';
import Makit from '../models/Makit';

const HomeScreen = ({ navigation }) => {

    return (
      <SafeAreaView style={styles.container}>
        <SearchInput style={styles.searchContainer}/>
        <CategoryList style={styles.category} /> 
      </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    // backgroundColor: '#ccc',
    flex: 1,
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginTop: 25,
    height: 50,
    width: 50,
    margin: 8,
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
  makitTitle: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  allMakit: {
    // fontFamily: 'MarkaziText_700Bold',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  search: {
    marginLeft: '40%',
  },
  makitList: {
    // backgroundColor: '#ccc',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: 500,
    width: windowWidth,
    justifyContent: 'space-evenly',
    paddingTop: 5,
  },
  makitIcon: {
    height: 100,
    width: 175,
    flexDirection: 'row',
  },
  makitName: {
    fontFamily: 'MarkaziText_700Bold',
    // marginTop: 10,
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
  },
  makitLocation: {
    // fontFamily: 'MarkaziText_400Regular',
    fontFamily: 'RobotoSlab_400Regular',
    marginBottom: 15,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: -5,
  },
});
