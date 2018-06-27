import {
  fetchAddressesFailure,
  fetchAddressesSuccess,
  saveAddressAsync,
  saveAddressSuccess,
} from '../addresses';

import Storage, { saveAddress } from '../../api/storage';

import {
  FETCH_ADDRESSES_FAILURE,
  FETCH_ADDRESSES_SUCCESS,
  SAVE_ADDRESS_SUCCESS,
} from '../../constants/addressActions';

jest.mock('../../api/storage');

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

describe('asynchronous action creators', () => {
  test('saveAddress dispatches fetchBalances', async () => {
    const address = {};
    const dispatch = jest.fn();
    saveAddressAsync(address)(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(undefined);
    });
  });
});
