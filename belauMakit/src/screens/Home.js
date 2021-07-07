import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';

import FormInput from '../components/FormInput';

import Bento from '../images/bento.png';
import Breakfast from '../images/breakfast.png';
import Drink from '../images/coconut.png';
import Dessert from '../images/sweets.png';
import Odoim from '../images/thanksgiving.png';
import Ongraol from '../images/sweetpotato.png';
import Yasai from '../images/spinach.png';
import Fruits from '../images/bananas.png';
import Makit1 from '../images/R1.png';
import Makit2 from '../images/R2.png';
import Makit3 from '../images/R3.png';
import Makit4 from '../images/R4.png';
import { windowWidth, windowHeight } from '../components/Dimensions';

const HomeScreen = ({ navigation }) => {
  const [foodFilter, setFoodFilter] = useState([
    {
      name: 'Bento',
      image: (
        <Image
          source={Bento}
          resizeMode="contain"
          style={{ height: 50, width: 50 }}
        />
      ),
      id: 1,
    },
    {
      name: 'Breakfast',
      image: (
        <Image
          source={Breakfast}
          resizeMode="contain"
          style={{ height: 50, width: 50 }}
        />
      ),
      id: 2,
    },
    {
      name: 'Drinks',
      image: (
        <Image
          source={Drink}
          resizeMode="contain"
          style={{ height: 50, width: 50 }}
        />
      ),
      id: 3,
    },
    {
      name: 'Fruits',
      image: (
        <Image
          source={Fruits}
          resizeMode="contain"
          style={{ height: 50, width: 50 }}
        />
      ),
      id: 4,
    },
    {
      name: 'Odoim',
      image: (
        <Image
          source={Odoim}
          resizeMode="contain"
          style={{ height: 50, width: 50 }}
        />
      ),
      id: 5,
    },
    {
      name: 'Dessert',
      image: (
        <Image
          source={Dessert}
          resizeMode="contain"
          style={{ height: 50, width: 50 }}
        />
      ),
      id: 6,
    },
    {
      name: 'Ongraol',
      image: (
        <Image
          source={Ongraol}
          resizeMode="contain"
          style={{ height: 50, width: 50 }}
        />
      ),
      id: 7,
    },
    {
      name: 'Yasai',
      image: (
        <Image
          source={Yasai}
          resizeMode="contain"
          style={{ height: 50, width: 50 }}
        />
      ),
      id: 8,
    },
  ]);

  const [makitFilter, setMakitFilter] = useState([
    {
      name: 'Makit1',
      location: 'Ngermetengel',
      image: (
        <Image
          source={Makit1}
          resizeMode="contain"
          style={{ height: 100, width: 175 }}
        />
      ),
      id: 1,
    },
    {
      name: 'Makit2',
      location: 'Imeong',
      image: (
        <Image
          source={Makit2}
          resizeMode="contain"
          style={{ height: 100, width: 175 }}
        />
      ),
      id: 2,
    },
    {
      name: 'Makit3',
      location: 'Dngeronger',
      image: (
        <Image
          source={Makit3}
          resizeMode="contain"
          style={{ height: 100, width: 175 }}
        />
      ),
      id: 3,
    },
    {
      name: 'Makit4',
      location: 'Medalaii',
      image: (
        <Image
          source={Makit4}
          resizeMode="contain"
          style={{ height: 100, width: 175 }}
        />
      ),
      id: 4,
    },
    {
      name: 'Makit5',
      location: 'Karmeliang',
      image: (
        <Image
          source={Makit1}
          resizeMode="contain"
          style={{ height: 100, width: 175 }}
        />
      ),
      id: 5,
    },
    {
      name: 'Makit6',
      location: 'Ngermasech',
      image: (
        <Image
          source={Makit2}
          resizeMode="contain"
          style={{ height: 100, width: 175 }}
        />
      ),
      id: 6,
    },
    {
      name: 'Makit7',
      location: 'Ngerutoi',
      image: (
        <Image
          source={Makit3}
          resizeMode="contain"
          style={{ height: 100, width: 175 }}
        />
      ),
      id: 7,
    },
    {
      name: 'Makit8',
      location: 'Ordomel',
      image: (
        <Image
          source={Makit4}
          resizeMode="contain"
          style={{ height: 100, width: 175 }}
        />
      ),
      id: 8,
    },
    {
      name: 'Makit9',
      location: 'Kloulklubed',
      image: (
        <Image
          source={Makit1}
          resizeMode="contain"
          style={{ height: 100, width: 175 }}
        />
      ),
      id: 8,
    },
    {
      name: 'Makit10',
      location: 'Ngermechau',
      image: (
        <Image
          source={Makit2}
          resizeMode="contain"
          style={{ height: 100, width: 175 }}
        />
      ),
      id: 8,
    },
  ]);

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.searchContainer}>
              <FormInput
                placeholderText="Search for food, makit, etc."
                iconType="search1"
                style={styles.searching}
              />
              {/* <Category style={styles.cat}/> */}
            </View>
            <View style={styles.category}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <FlatList
                  numColumns={8}
                  keyExtractor={(item) => item.id}
                  data={foodFilter}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('logout')}>
                      <View>
                        <Text style={styles.icon}>{item.image}</Text>
                        <Text style={styles.catText}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </ScrollView>
              <View style={{flex: 1, flexDirection: 'column'}} >
                  <Text style={styles.allMakit}>All Makit</Text>
                <View style={styles.makitList}>
                <FlatList
                  numColumns={2}
                  keyExtractor={(item) => item.id}
                  data={makitFilter}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('logout')}
                      >
                      <View>
                        <Text style={styles.makitIcon}>{item.image}</Text>
                        <Text style={styles.makitName}>{item.name}</Text>
                        <Text style={styles.makitLocation}>{item.location}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
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
