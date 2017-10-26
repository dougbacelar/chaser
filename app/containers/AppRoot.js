import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import '../../global';
import AddressList from '../components/AddressList';

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
    return AsyncStorage.setItem('addresses', JSON.stringify(myAddresses));
  } catch (err) {
    throw Error(`something went wrong yo ${err}`);
  }
}

export class AppRoot extends React.Component {
  componentWillMount() {
    test().then(AsyncStorage.getItem('addresses').then(console.log));

    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://mainnet.infura.io/'),
    );

    // web3.eth.getBlock('latest').then(console.log);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!!</Text>
        <AddressList />
      </View>
    );
  }
}

export default connect(null, null)(AppRoot);
