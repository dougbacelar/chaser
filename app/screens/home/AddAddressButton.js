import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

const AddAddressButton = props => {
  const { onPress } = props;
  return <Icon name="add" color="#000" size={30} onPress={() => onPress()} />;
};

AddAddressButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default AddAddressButton;
