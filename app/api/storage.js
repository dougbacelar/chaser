import { AsyncStorage } from 'react-native';

class Storage {
  static async saveAddress(newAddress) {
    // response = await AsyncStorage.getItem('addresses');

    this.fetchAddresses()
      .then(response => {
        console.log(`new address is: ${JSON.stringify(newAddress)}`);
        console.log(`current addresses ${response}`);
        const addresses = JSON.parse(response);

        if (this.isUniqueAddress(newAddress, addresses)) {
          console.log('address is unique');

          if (this.isValidAddress(newAddress)) {
            const newAddressId = `${newAddress.currencyId}-${newAddress.hash}`;

            addresses.byId[newAddressId] = {
              id: newAddressId,
              ...newAddress,
            };

            addresses.allIds.push(newAddressId);

            return AsyncStorage.setItem(
              'addresses',
              JSON.stringify(addresses),
            ).then(() => this.fetchAddresses());
          }
        } else {
          throw Error('address is not unique!');
        }
      })
      .catch(err => {
        throw Error(
          `something went wrong while trying to save addresses ${err}`,
        );
      });
  }

  static async fetchAddresses() {
    return AsyncStorage.getItem('addresses');
  }

  static isValidAddress(newAddress) {
    return (
      newAddress !== null &&
      newAddress.currencyId.length > 2 &&
      newAddress.hash.length > 5
    );
  }

  static isUniqueAddress(newAddress, addresses) {
    return (
      Object.values(addresses.byId).filter(
        address =>
          address.currencyId === newAddress.currencyId &&
          address.hash === newAddress.hash,
      ).length === 0
    );
  }
}

export default Storage;
