import React from 'react';
import { Icon } from 'react-native-elements';

const onPress = () => console.log('clicked');

const AddAddressButton = () => (
  <Icon name="add" color="#fff" onPress={() => onPress()} />
);

export default AddAddressButton;
