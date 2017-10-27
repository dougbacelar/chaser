import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/config/store';
// import ConnectedAppRoot from './app/containers/AppRoot';
import AppWithNavigationState from './app/screens/Navigator';
import './global';

const App = () => (
  <Provider store={configureStore()}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
