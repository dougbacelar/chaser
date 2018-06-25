import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Dimensions, Picker } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements';

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

export class AddAddressForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(`props: ${props.handleSaveAddress}`);
    this.state = {
      alias: '',
      hash: '',
      currencyId: 'eth',
    };

    this.onPress = event => {
      console.log(`trying to save ${event}`);
      console.log(`address to save: ${JSON.stringify(this.state)}`);
      const { handleSaveAddress } = this.props;

      handleSaveAddress(this.state);
    };

    this.onChange = event => {
      console.log(event);
      console.log(this.state);
      console.log(`values have changed! ${event}`);
    };
    this.onValueChange = currencyId => {
      console.log(currencyId);
      this.setState({ currencyId });
    };
  }

  render() {
    return (
      <View>
        <FormLabel>Currency</FormLabel>
        <Picker
          selectedValue={this.state.currencyId}
          onValueChange={this.onValueChange}>
          <Picker.Item label="Ethereum" value="eth" />
          <Picker.Item label="Bitcoin" value="btc" />
        </Picker>
        <FormValidationMessage style={{ display: 'none' }}>
          You must select a currency
        </FormValidationMessage>

        <FormLabel>Address Alias(optional)</FormLabel>
        <FormInput
          placeholder="Main wallet"
          onChangeText={alias => this.setState({ alias })}
        />
        <FormValidationMessage style={{ display: 'none' }}>
          Error message
        </FormValidationMessage>

        <FormLabel>Address</FormLabel>
        <FormInput
          placeholder="0x8305...f4854"
          onChangeText={hash => this.setState({ hash })}
        />
        <FormValidationMessage style={{ display: 'none' }}>
          Error message
        </FormValidationMessage>

        <Button
          title="Submit"
          style={{ marginTop: 20 }}
          backgroundColor="blue"
          onPress={this.onPress}
        />
      </View>
    );
  }
}
PropTypes.AddAddressForm = {
  handleSaveAddress: PropTypes.func.isRequired,
};

export default AddAddressForm;
