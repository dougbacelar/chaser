import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import '../../../global';
import AddAddressForm from './AddAddressForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export class AddAddress extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <AddAddressForm />
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
