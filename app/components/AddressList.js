import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export const AddressList = props => {
  const { addressList } = props;
  console.log(`addressList props: ${JSON.stringify(props.addressList)}`);
  return (
    <View>
      {addressList.map(addr => (
        <View key={addr.hash}>
          <Text>{addr.alias}</Text>
          <Text>{`${addr.hash.slice(0, 4)}...${addr.hash.slice(-4)}`}</Text>
          {addr.balance && <Text>{`${addr.balance} eth`}</Text>}
        </View>
      ))}
    </View>
  );
};

AddressList.propTypes = {
  addressList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      alias: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
      currencyId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AddressList;
