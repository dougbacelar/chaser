import { FETCH_ADDRESSES_SUCCESS } from '../constants/addressesActions';

const initialState = {
  addresses: ['lala'],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ADDRESSES_SUCCESS:
      return {
        ...state,
        [action.payload.coin]: {
          ...state[action.payload.coin],
          ...action.payload.data,
        },
      };
    default:
      return state;
  }
}

export const getAddressList = (state, coinCode) => {
  console.log(state);
  return state[coinCode].addresses;
};
