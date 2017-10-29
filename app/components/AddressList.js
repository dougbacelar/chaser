import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { getAddressList } from '../reducers/addresses';

export const AddressList = props => {
  const { addressList } = props;
  console.log(`addresslist: ${addressList}`);
  return (
    <View>
      {addressList.map(addr => (
        <Text key={addr.hash}>
          {addr.alias}: {addr.hash}
        </Text>
      ))}
    </View>
  );
};

AddressList.propTypes = {
  addressList: PropTypes.arrayOf(
    PropTypes.shape({
      alias: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  addressList: getAddressList(state, 'eth'),
});

export default connect(mapStateToProps)(AddressList);
