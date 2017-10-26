import React from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import ConnectedAddressList from '../components/AddressList';

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

const Web3 = require('web3');

export class Home extends React.Component {
  componentWillMount() {
    test().then(AsyncStorage.getItem('addresses').then(console.log));

    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://mainnet.infura.io/'),
    );

    // web3.eth.getBlock('latest').then(console.log);
  }

  render() {
    return (
      <View>
        <Text>Home, Hello World!!</Text>
        <ConnectedAddressList />
      </View>
    );
  }
}

export default connect(null, null)(Home);
