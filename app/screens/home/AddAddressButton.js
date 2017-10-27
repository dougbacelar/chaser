import React from 'react';
import { Icon } from 'react-native-elements';

const AddAddressButton = props => {
  const { onPress } = props;
  return <Icon name="add" color="#fff" onPress={() => onPress()} />;
};

export default AddAddressButton;
