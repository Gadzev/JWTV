/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'mobx-react';
import {RootStore} from './src/stores/RootStore';

const store = RootStore.create(
  {},
  {
    fetch: (url) => window.fetch(url).then((res) => res.json()),
  },
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
