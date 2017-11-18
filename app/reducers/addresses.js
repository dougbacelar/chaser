import {
  SAVE_ADDRESS_SUCCESS,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_BALANCE_SUCCESS,
} from '../constants/addressActions';

const initialState = {
  byId: {
    'eth-0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5': {
      id: 'eth-0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5',
      alias: 'random',
      hash: '0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5',
      currencyId: 'eth',
    },
    'eth-0x3032f86671dc67e6d46572a03dc959e50086b87f': {
      id: 'eth-0x3032f86671dc67e6d46572a03dc959e50086b87f',
      alias: 'second',
      hash: '0x3032f86671dc67e6d46572a03dc959e50086b87f',
      currencyId: 'eth',
    },
    'btc-0x230412388': {
      id: 'btc-0x230412388',
      alias: 'test',
      hash: '0x230412388',
      currencyId: 'btc',
    },
  },
  allIds: [
    'eth-0x475973320292960f193d309438c14dbe58bbee9b',
    'eth-0x3032f86671dc67e6d46572a03dc959e50086b87f',
    'btc-0x230412388',
  ],
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
    case FETCH_BALANCE_SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
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
