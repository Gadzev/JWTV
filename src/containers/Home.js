import React, {useEffect} from 'react';
import {View, StyleSheet, TVMenuControl} from 'react-native';
import Show from '../components/Show';
import {observer, inject} from 'mobx-react';
import {useBackHandler} from '@react-native-community/hooks';

const Home = inject('store')(
  observer(({store: {shows, showSelected, getSelectedShow}}) => {
    useEffect(() => {
      showSelected
        ? TVMenuControl.enableTVMenuKey()
        : TVMenuControl.disableTVMenuKey();
    }, [showSelected]);

    useBackHandler(() => {
      if (showSelected) {
        getSelectedShow.toggleSelected();
        TVMenuControl.disableTVMenuKey();
        return true;
      }

      return false;
    });

    return (
      <View style={styles.container}>
        {shows.map((show) => (
          <Show show={show} key={show.id} />
        ))}
      </View>
    );
  }),
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
