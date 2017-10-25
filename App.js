import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
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

async function test() {
  const myAddresses = {
    eth: ['1234567', 'abscasdqwe'],
    btc: ['654321'],
  };

  try {
    console.log('trying to save address');
    return AsyncStorage.setItem(
      'addresses',
      JSON.stringify(myAddresses), // JSON.stringify(myAddresses)
      // err => (err ? console.log('error') : console.log('saved addresses')),
    );
  } catch (err) {
    throw Error(`something went wrong yo${err}`);
  }
}

export default class App extends React.Component {
  componentWillMount() {
    test().then(AsyncStorage.getItem('addresses').then(console.log));

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
