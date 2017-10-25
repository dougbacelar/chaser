import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './global';

const Web3 = require('web3');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  componentWillMount() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://mainnet.infura.io/'),
    );

    web3.eth.getBlock('latest').then(console.log);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!!</Text>
      </View>
    );
  }
}
