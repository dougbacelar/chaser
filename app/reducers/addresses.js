import {
  SAVE_ADDRESS_SUCCESS,
  FETCH_ADDRESSES_SUCCESS,
} from '../constants/addressActions';

const initialState = {
  byId: {
    1: {
      id: 1,
      alias: 'lala',
      hash: '0x389479138',
      currencyId: 'eth',
    },
    2: {
      id: 2,
      alias: 'test',
      hash: '0x230412388',
      currencyId: 'btc',
    },
  },
  allIds: [1, 2],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_ADDRESS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_ADDRESSES_SUCCESS:
      return {
        ...state,
        addresses: action.payload,
      };
    default:
      return state;
  }
}

export const getAddressList = (state, currencyId) => {
  console.log(`[getAddressList ${currencyId}] ${JSON.stringify(state)}`);
  return Object.values(state.addresses.byId).filter(
    address => address.currencyId === currencyId,
  );
};

export const getAddressModel = state => state.addresses;
