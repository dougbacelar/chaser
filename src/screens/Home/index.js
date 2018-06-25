import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, AsyncStorage, Button } from 'react-native';
import { connect } from 'react-redux';
import ConnectedAddressList from '../../components/AddressList';
import '../../../global';
import { getAddressList } from '../../reducers/addresses';
import { fetchBalances } from '../../actions';
import testData from './testData.json';

async function setInitialAddressesForTesting() {
  try {
    const savedAddresses = await AsyncStorage.getItem('addresses');
    if (savedAddresses != null) {
      console.log('addresses are already saved, no need for testData.');
      return null;
    }
    return AsyncStorage.setItem('addresses', JSON.stringify(testData));
  } catch (err) {
    throw Error(`something went wrong ${err}`);
  }
}

export class Home extends React.Component {
  componentWillMount() {
    const { addressList, handleFetchBalances } = this.props;

    setInitialAddressesForTesting();

    handleFetchBalances(addressList);
  }

  render() {
    const { navigate } = this.props.navigation;
    const { addressList } = this.props;

    return (
      <View>
        <Text>Home, Hello World!!</Text>
        <ConnectedAddressList addressList={addressList} />
        <Button
          onPress={() => navigate('AddAddress', { name: 'Ethereum' })}
          title="Add Address"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  addressList: getAddressList(state, 'eth'),
});

const mapDispatchToProps = dispatch => ({
  handleFetchBalances: addresses => {
    dispatch(fetchBalances(addresses));
  },
});

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  addressList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      alias: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
      currencyId: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleFetchBalances: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
