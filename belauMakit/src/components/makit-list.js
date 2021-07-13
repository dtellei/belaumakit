import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const MakitList = props => {
  return (
    <View style={styles.makitItem}>
      <TouchableOpacity onPress={props.OnSelectMakit}>
        <View style={{...styles.makitRow, ...styles.makitHeader}}>
          <ImageBackground
            source={{uri: props.image}}
            style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
              </View>
            </ImageBackground>
        </View>
        <View style={{...styles.makitRow, ...styles.makitDetail}}>
          <Text>{props.location}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MakitList;

const styles = StyleSheet.create({
  makitItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden'
  },
  makitRow: {
    flexDirection: 'row'
  },
  makitHeader: {
    height: '85%'
  },
  makitDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center'
  }
});

