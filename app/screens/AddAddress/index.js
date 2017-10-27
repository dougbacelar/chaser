import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, AsyncStorage, Button } from 'react-native';
import { connect } from 'react-redux';
import ConnectedAddressList from '../../components/AddressList';
import '../../../global';

export class AddAddress extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Adding address!!!!</Text>
      </View>
    );
  }
}

AddAddress.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, null)(AddAddress);
