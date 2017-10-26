import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/config/store';
import AppRoot from './app/containers/AppRoot';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppRoot />
      </Provider>
    );
  }
}
