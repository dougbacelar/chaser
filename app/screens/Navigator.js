import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import HomeScreen from './Home';
import AddAddressScreen from './AddAddress';
import { APP_NAME, ADD_ADDRESS_TITLE } from '../constants';
import AddAddressButton from './Home/AddAddressButton';

const homeNavOptions = ({ navigation }) => {
  const { navigate } = navigation;
  return {
    headerTitle: APP_NAME,
    headerRight: (
      <AddAddressButton
        onPress={() => navigate('AddAddress', { name: 'Ethereum' })}
      />
    ),
  };
};

const addAddressNavOptions = () => ({
  headerTitle: ADD_ADDRESS_TITLE,
});

export const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: homeNavOptions,
  },
  AddAddress: {
    screen: AddAddressScreen,
    navigationOptions: addAddressNavOptions,
  },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
