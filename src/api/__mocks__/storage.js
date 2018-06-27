const addresses = {
  allIds: ['eth-12345', 'eth-12346'],
  byId: {
    'eth-12345': {
      currencyId: 'eth',
      hash: '12345',
      balance: 1.31234123,
    },
    'eth-12346': {
      currencyId: 'eth',
      hash: '12346',
      balance: 5.4313213,
    },
  },
};
export const saveAddress = jest.fn().mockResolvedValue(addresses);

const storage = jest.fn().mockImplementation(() => {
  return { saveAddress };
});

export default storage;
