import {
  SAVE_ADDRESS_SUCCESS,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_FAILURE,
} from '../constants/addressActions';
import Storage from '../api/storage';
import { fetchBalance } from '.';

export function saveAddressSuccess(addresses) {
  return {
    type: SAVE_ADDRESS_SUCCESS,
    payload: addresses,
  };
}

export function saveAddressAsync(address) {
  return async dispatch => {
    const savedAddresses = await Storage.saveAddress(address);
    //todo only fetch balance if saveAddress was successful
    dispatch(fetchBalance(address));
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
