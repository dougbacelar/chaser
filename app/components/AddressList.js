import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { getAddressList } from '../reducers/addresses';

export const AddressList = props => {
  const { addressList } = props;
  console.log(`addresslist: ${addressList}`);
  return <Text>{addressList}</Text>;
};

AddressList.propTypes = {
  addressList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  addressList: getAddressList(state, 'eth'),
});

export default connect(mapStateToProps)(AddressList);
