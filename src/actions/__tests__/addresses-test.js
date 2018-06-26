import {
  fetchAddressesFailure,
  fetchAddressesSuccess,
  saveAddressSuccess,
} from '../addresses';

import {
  FETCH_ADDRESSES_FAILURE,
  FETCH_ADDRESSES_SUCCESS,
  SAVE_ADDRESS_SUCCESS,
} from '../../constants/addressActions';

describe.each([
  [FETCH_ADDRESSES_FAILURE, {}, fetchAddressesFailure],
  [FETCH_ADDRESSES_SUCCESS, {}, fetchAddressesSuccess],
  [SAVE_ADDRESS_SUCCESS, {}, saveAddressSuccess],
])('synchronous action creators', (type, payload, actionCreator) => {
  test(`returns correction action ${type}`, () => {
    const expected = {
      payload,
      type,
    };
    expect(actionCreator(payload)).toEqual(expected);
  });
});
