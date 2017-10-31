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
    await Storage.saveAddress(address)
      .then(addresses => {
        console.log(`new saved addresses: ${addresses}`);
        return dispatch(saveAddressSuccess(addresses));
      })
      .catch(err => console.log(`err:${err}`));
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
