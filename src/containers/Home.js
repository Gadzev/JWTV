import React from 'react';
import {View, StyleSheet} from 'react-native';
import Show from '../components/Show';
import {observer, inject} from 'mobx-react';

const Home = inject('store')(
  observer(({store: {shows}}) => (
    <View style={styles.container}>
      {shows.map((show) => (
        <Show show={show} key={show.id} />
      ))}
    </View>
  )),
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
