import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/config/store';
import ConnectedAppRoot from './app/containers/AppRoot';

export default () => (
  <Provider store={configureStore()}>
    <ConnectedAppRoot />
  </Provider>
);
