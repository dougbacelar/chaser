import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import '../../global';
import ConnectedHome from '../screens/home';
import { APP_NAME } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const AppRoot = () => (
  <View style={styles.container}>
    <Header
      backgroundColor="blue"
      centerComponent={{ text: APP_NAME, style: { color: '#fff' } }}
      rightComponent={{ icon: 'add', color: '#fff' }}
    />
    <Text>App Root!!</Text>
    <ConnectedHome />
  </View>
);

export default connect(null, null)(AppRoot);
