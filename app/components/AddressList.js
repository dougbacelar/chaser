import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAddressList } from '../reducers/addresses';
import { Text } from 'react-native';

export class AddressList extends React.Component {
  render() {
    const { addressList } = this.props;
    console.log(`addresslist: ${addressList}`);
    return <Text>{addressList}</Text>;
  }
}

AddressList.propTypes = {
  addressList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  addressList: getAddressList(state, 'eth'),
});

export default connect(mapStateToProps)(AddressList);
