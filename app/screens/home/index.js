import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, AsyncStorage, Button } from 'react-native';
import { connect } from 'react-redux';
import ConnectedAddressList from '../../components/AddressList';
import '../../../global';
import { getAddressList, getAddressModel } from '../../reducers/addresses';

async function setInitialAddressesForTesting(myAddresses) {
  try {
    return AsyncStorage.setItem('addresses', JSON.stringify(myAddresses));
  } catch (err) {
    throw Error(`something went wrong ${err}`);
  }
}

const Web3 = require('web3');

export class Home extends React.Component {
  componentWillMount() {
    const { addressModel } = this.props;

    setInitialAddressesForTesting(addressModel).then(
      AsyncStorage.getItem('addresses').then(console.log),
    );

    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://mainnet.infura.io/'),
    );

    // web3.eth.getBlock('latest').then(console.log);
  }

  render() {
    const { navigate } = this.props.navigation;
    const { addressList } = this.props;
    console.log(`home addresslist: ${addressList}`);
    return (
      <View>
        <Text>Home, Hello World!!</Text>
        <Button
          onPress={() => navigate('AddAddress', { name: 'Ethereum' })}
          title="Add Address"
        />
        <ConnectedAddressList addressList={addressList} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  addressList: getAddressList(state, 'eth'),
  addressModel: getAddressModel(state),
});

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  addressList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      alias: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
      currencyId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Home);
