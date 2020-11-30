import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ratio = SCREEN_WIDTH / 1920;

const Show = ({show}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: show.img}} />
      </View>
      <View>
        <Text style={styles.text}>{show.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    width: '100%',
    height: ratio * 800,
    padding: 30,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 22,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
});

export default Show;
