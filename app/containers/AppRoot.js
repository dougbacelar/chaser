import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import '../../global';
import ConnectedHome from '../screens/Home';

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
    <Text>App Root!!</Text>
    <ConnectedHome />
  </View>
);

export default connect(null, null)(AppRoot);
