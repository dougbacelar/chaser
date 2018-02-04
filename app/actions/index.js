import {
  SAVE_ADDRESS_SUCCESS,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_FAILURE,
  FETCH_BALANCE_SUCCESS,
} from '../constants/addressActions';
import Storage from '../api/storage';
import Ethereum from '../api/ethereum';

export function fetchBalanceSuccess(payload) {
  return {
    type: FETCH_BALANCE_SUCCESS,
    payload,
  };
}

export function fetchBalances(addresses) {
  return async dispatch => {
    addresses.forEach(async address => {
      if (address.currencyId === 'eth') {
        const ethPayload = await Ethereum.fetchBalance(address);
        dispatch(fetchBalanceSuccess(ethPayload));
      }
    });
  };
}

export function saveAddressSuccess(addresses) {
  return {
    type: SAVE_ADDRESS_SUCCESS,
    payload: addresses,
  };
}

export function saveAddress(address) {
  return async dispatch => {
    const savedAddresses = await Storage.saveAddress(address);
    dispatch(fetchBalances(Object.values(savedAddresses.byId)));
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
