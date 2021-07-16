import React from 'react';
import { Image, StyleSheet } from 'react-native';

import CategoryModel from '../models/CategoryModel';
import MakitModel from '../models/MakitModel';
import ProductModel from '../models/ProductModel';
export const CATEGORIES = [
    new CategoryModel('c1', 'Bento', <Image style={{ height: 50, width: 50, paddingBottom: 5 }} source={require('../assets/bento.png')} resizeMode="contain" />),
    new CategoryModel('c2', 'Breakfast', <Image style={{ height: 50, width: 50, paddingBottom: 5 }} source={require('../assets/breakfast.png')} resizeMode="contain" />),
    new CategoryModel('c3', 'Drinks', <Image style={{ height: 50, width: 50, paddingBottom: 5 }} source={require('../assets/coconut.png')} resizeMode="contain" />),
    new CategoryModel('c4', 'Fruits', <Image style={{ height: 50, width: 50, paddingBottom: 5 }} source={require('../assets/sweets.png')} resizeMode="contain" />),
    new CategoryModel('c5', 'Protein', <Image style={{ height: 50, width: 50, paddingBottom: 5 }} source={require('../assets/thanksgiving.png')} resizeMode="contain" />),
    new CategoryModel('c6', 'Snacks', <Image style={{ height: 50, width: 50, paddingBottom: 5 }} source={require('../assets/sweetpotato.png')} resizeMode="contain" />),
    new CategoryModel('c7', 'Starch', <Image style={{ height: 50, width: 50, paddingBottom: 5 }} source={require('../assets/spinach.png')} resizeMode="contain" />),
    new CategoryModel('c8', 'Veggies', <Image style={{ height: 50, width: 50, paddingBottom: 5 }} source={require('../assets/bananas.png')} resizeMode="contain" />),
];

export const MAKITS = [
    new MakitModel('a1', 'Makit #1', 'Ngermetengel', <Image source={require('../assets/R1.png')} resizeMode="contain" />),
    new MakitModel('a2', 'Makit #2', 'Imeong', <Image source={require('../assets/R2.png')} resizeMode="contain" />),
    new MakitModel('a3', 'Makit #3', 'Dngeronger', <Image source={require('../assets/R3.png')} resizeMode="contain" />),
    new MakitModel('a4', 'Makit #4', 'Medalaii', <Image source={require('../assets/R4.png')} resizeMode="contain" />),
    new MakitModel('a5', 'Makit #5', 'Karmeliang', <Image source={require('../assets/R1.png')} resizeMode="contain" />),
    new MakitModel('a6', 'Makit #6', 'Ngermasech', <Image source={require('../assets/R2.png')} resizeMode="contain" />),
    new MakitModel('a7', 'Makit #7', 'Ngerutoi', <Image source={require('../assets/R3.png')} resizeMode="contain" />),
    new MakitModel('a8', 'Makit #8', 'Ordomel', <Image source={require('../assets/R4.png')} resizeMode="contain" />),
    new MakitModel('a9', 'Makit #9', 'Kloulklubed', <Image source={require('../assets/R1.png')} resizeMode="contain" />),
    new MakitModel('a10', 'Makit #10', 'Ngermechau', <Image source={require('../assets/R2.png')} resizeMode="contain" />)
];

export const PRODUCTS = [ 
    new ProductModel('e1', 'c1', 'Bento', 'Brenda', '123-456-7890', '775-2011', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$5', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e2', 'c2', 'Breakfast', 'Brenda', '123-456-7890', '775-2011', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$3', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e3', 'c3', 'Drinks', 'Brenda', '123-456-7890', '775-2011', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$1', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e4', 'c4', 'Fruits', 'Brenda', '123-456-7890', '775-2011', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$2', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e5', 'c5', 'Protein', 'Brenda', '123-456-7890', '775-2011', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$5', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e6', 'c6', 'Snacks', 'Brenda', '123-456-7890', '775-2011', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$3', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e7', 'c7', 'Starch', 'Brenda', '123-456-7890', '775-2011', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$4', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e8', 'c8', 'Veggies', 'Brenda', '123-456-7890', '775-2011', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$3', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e9', 'c1', 'Bento1', 'Joe', '000-456-7890', '775-9999', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$5', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e10', 'c2', 'Breakfast1', 'Joe', '000-456-7890', '775-9999', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$3', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e11', 'c3', 'Drinks1', 'Joe', '000-456-7890', '775-9999', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$1', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e12', 'c4', 'Fruits1', 'Joe', '000-456-7890', '775-9999', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$2', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e13', 'c5', 'Protein1', 'Joe', '000-456-7890', '775-9999', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$5', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e14', 'c6', 'Snacks1', 'Joe', '000-456-7890', '775-9999', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$3', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e15', 'c7', 'Starch1', 'Joe', '000-456-7890', '775-9999', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$4', '06/15/2021 5AM', true, 'Yummy'),
    new ProductModel('e16', 'c8', 'Veggies1', 'Joe', '000-456-7890', '775-9999', <Image source={require('../assets/bananas.png')} resizeMode="contain" />, '$3', '06/15/2021 5AM', true, 'Yummy')
];

const styles = StyleSheet.create({

});