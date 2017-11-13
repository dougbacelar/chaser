import {
  SAVE_ADDRESS_SUCCESS,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_FAILURE,
} from '../constants/addressActions';
import Storage from '../api/storage';

export function saveAddressSuccess(addresses) {
  return {
    type: SAVE_ADDRESS_SUCCESS,
    payload: addresses,
  };
}

export function saveAddress(address) {
  return async dispatch => {
    console.log('saveAddress action');
    const savedAddresses = await Storage.saveAddress(address);
    console.log(`saved addresses are: ${JSON.stringify(savedAddresses)}`);
    dispatch(saveAddressSuccess(savedAddresses));
  };
}

export function fetchAddressesSuccess(addresses) {
  return {
    type: FETCH_ADDRESSES_SUCCESS,
    payload: addresses,
  };
}

export function fetchAddressesFailure(payload) {
  return {
    type: FETCH_ADDRESSES_FAILURE,
    payload,
  };
}
