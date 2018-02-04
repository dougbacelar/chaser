import {
  SAVE_ADDRESS_SUCCESS,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_BALANCE_SUCCESS,
} from '../constants/addressActions';

const initialState = {
  byId: {},
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
