import { FETCH_BALANCE_SUCCESS } from '../constants/addressActions';
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
