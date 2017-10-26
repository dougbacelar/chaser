import {
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_FAILURE,
} from '../constants/addressesActions';

export function fetchAddressesSuccess(payload) {
  return {
    type: FETCH_ADDRESSES_SUCCESS,
    payload,
  };
}

export function fetchAddressesFailure(payload) {
  return {
    type: FETCH_ADDRESSES_FAILURE,
    payload,
  };
}
