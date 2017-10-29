import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Dimensions } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements';

import { Select, Option } from 'react-native-chooser';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    width: width - 40,
  },
});

const AddAddressForm = () => (
  <View>
    <FormLabel>Currency</FormLabel>
    <Select
      defaultText="Select a cryptocurrency"
      style={styles.container}
      textStyle={{}}
      backdropStyle={{ backgroundColor: '#d3d5d6' }}
      optionListStyle={{ backgroundColor: '#F5FCFF' }}>
      <Option value={{ name: 'eth' }}>Ethereum</Option>
      <Option value="btc">Bitcoin</Option>
    </Select>
    <FormValidationMessage style={{ display: 'none' }}>
      You must select a currency
    </FormValidationMessage>

    <FormLabel>Address Alias(optional)</FormLabel>
    <FormInput placeholder="Main wallet" />
    <FormValidationMessage style={{ display: 'none' }}>
      Error message
    </FormValidationMessage>

    <FormLabel>Address</FormLabel>
    <FormInput placeholder="0x8305...f4854" />
    <FormValidationMessage style={{ display: 'none' }}>
      Error message
    </FormValidationMessage>

    <Button title="Submit" style={{ marginTop: 20 }} backgroundColor="blue" />
  </View>
);
// onChangeText={someFunction}
PropTypes.AddAddressForm = {};

export default AddAddressForm;
