import { AsyncStorage } from 'react-native';

class Storage {
  static async saveAddress(newAddress) {
    console.log('==========trying to save==========');
    console.log(`new address is: ${JSON.stringify(newAddress)}`);
    const currentAddresses = await this.fetchAddresses();

    if (!this.isUniqueAddress(newAddress, currentAddresses)) {
      throw Error('address is not unique!');
    }

    if (!this.isValidAddress(newAddress)) {
      throw Error('address is not valid!');
    }

    const newAddressId = `${newAddress.currencyId}-${newAddress.hash}`;

    // adding newAddress to currentAddresses object before saving
    currentAddresses.byId[newAddressId] = {
      id: newAddressId,
      ...newAddress,
    };

    currentAddresses.allIds.push(newAddressId);

    await this.overwriteAddresses(currentAddresses);

    const savedAddresses = await this.fetchAddresses();

    console.log(
      `after saving, savedAddresses: ${JSON.stringify(savedAddresses)}`,
    );
    return savedAddresses;
  }

  static async fetchAddresses() {
    try {
      const addresses = await AsyncStorage.getItem('addresses');

      console.log(`[fetchAddresses]current addresses ${addresses}`);
      return JSON.parse(addresses);
    } catch (err) {
      throw Error(`Could not fetch saved addresses: ${err}`);
    }
  }

  static async overwriteAddresses(newAddresses) {
    try {
      await AsyncStorage.setItem('addresses', JSON.stringify(newAddresses));

      console.log('[overwriteAddresses] addresses were saved');
      return true;
    } catch (err) {
      throw Error(`Could not save addresses: ${err}`);
    }
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
