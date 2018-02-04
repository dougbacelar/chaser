import { FETCH_BALANCE_SUCCESS } from '../constants/addressActions';
import Ethereum from '../api/ethereum';
import Storage from '../api/storage';

export function fetchBalanceSuccess(payload) {
  return {
    type: FETCH_BALANCE_SUCCESS,
    payload,
  };
}

export function fetchBalances() {
  return async dispatch => {
    const savedAddresses = await Storage.fetchAddresses();

    Object.values(savedAddresses.byId).forEach(async address => {
      if (address.currencyId === 'eth') {
        const ethPayload = await Ethereum.fetchBalance(address);
        dispatch(fetchBalanceSuccess(ethPayload));
      }
    });
  };
}
