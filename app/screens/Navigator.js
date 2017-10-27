import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import HomeScreen from './home';
import { APP_NAME, ADD_ADDRESS_TITLE } from '../constants';
import AddAddressButton from './home/AddAddressButton';

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const homeNavigationOptions = ({ navigation }) => {
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

export const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: homeNavigationOptions,
  },
  AddAddress: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: ADD_ADDRESS_TITLE,
    },
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
