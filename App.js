import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/config/store';
// import ConnectedAppRoot from './src/containers/AppRoot';
import AppWithNavigationState from './src/screens/Navigator';
import './global';

const App = () => (
  <Provider store={configureStore()}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
