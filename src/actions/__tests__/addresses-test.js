import {
  FETCH_ADDRESSES_FAILURE,
  FETCH_ADDRESSES_SUCCESS,
  SAVE_ADDRESS_SUCCESS,
} from '../../constants/addressActions';

import { saveAddressSuccess } from '../addresses';

describe('saveAddressSuccess', () => {
  test('returns correct action', () => {
    const payload = {};
    const expected = {
      payload,
      type: SAVE_ADDRESS_SUCCESS,
    };
    expect(saveAddressSuccess(payload)).toEqual(expected);
  });
});
