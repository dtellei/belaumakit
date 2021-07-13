import Category from '../models/category';
import Makit from '../models/makit';

export const CATEGORIES = [
    new Category('c1','Bento','image1', require('../assets/bento.png')),
    new Category('c2','Breakfast','image2', require('../assets/breakfast.png')),
    new Category('c3','Drinks','image3', require('../assets/coconut.png')),
    new Category('c4','Fruits','image4', require('../assets/sweets.png')),
    new Category('c5','Protein','image5', require('../assets/thanksgiving.png')),
    new Category('c6','Snacks','image6', require('../assets/sweetpotato.png')),
    new Category('c7','Starch','image7', require('../assets/spinach.png')),
    new Category('c8','Veggies','image8', require('../assets/bananas.png')),
];

export const MAKITS = [
    new Makit('a1','Makit #1','Ngermetengel', require('../assets/R1.png')),
    new Makit('a2','Makit #2','Imeong', require('../assets/R2.png')),
    new Makit('a3','Makit #3','Dngeronger', require('../assets/R3.png')),
    new Makit('a4','Makit #4','Medalaii', require('../assets/R4.png')),
    new Makit('a5','Makit #5','Karmeliang', require('../assets/R1.png')),
    new Makit('a6','Makit #6','Ngermasech', require('../assets/R2.png')),
    new Makit('a7','Makit #7','Ngerutoi', require('../assets/R3.png')),
    new Makit('a8','Makit #8','Ordomel', require('../assets/R4.png')),
    new Makit('a9','Makit #9','Kloulklubed', require('../assets/R1.png')),
    new Makit('a10','Makit #10','Ngermechau', require('../assets/R2.png'))
];