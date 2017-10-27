import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, AsyncStorage, Button } from 'react-native';
import { connect } from 'react-redux';
import ConnectedAddressList from '../../components/AddressList';
import '../../../global';

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
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Home, Hello World!!</Text>
        <Button
          onPress={() => navigate('AddAddress', { name: 'Ethereum' })}
          title="Add Address"
        />
        <ConnectedAddressList />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, null)(Home);
