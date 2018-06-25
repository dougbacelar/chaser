import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import '../../../global';
import AddAddressForm from './AddAddressForm';
import { saveAddress } from '../../actions/addresses';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export class AddAddress extends React.Component {
  render() {
    const { navigation, handleSaveAddress } = this.props;
    return (
      <View style={styles.container}>
        <AddAddressForm handleSaveAddress={handleSaveAddress} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSaveAddress: address => {
    dispatch(saveAddress(address));
  },
});

AddAddress.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  handleSaveAddress: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddAddress);
