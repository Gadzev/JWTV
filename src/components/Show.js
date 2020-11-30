import React from 'react';
import {View, Image, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {observer, inject} from 'mobx-react';
import {imageScale, scale} from '../utils/scaling';

const Show = inject('store')(
  observer(({show}) => {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => !show.selected && show.toggleSelected()}
          onHideUnderlay={show.selected ? show.toggleSelected : null}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: show.img}}
              accessibilityLabel={show.name}
            />
          </View>
        </TouchableHighlight>
        <View>
          {show.selected && <Text style={styles.text}>{show.description}</Text>}
        </View>
      </View>
    );
  }),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    width: '100%',
    height: imageScale(800),
    padding: 30,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  text: {
    fontSize: scale(22),
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
});
export default Show;
