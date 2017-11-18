const Web3 = require('web3');

class Ethereum {
  static async fetchBalance(ethAddress) {
    console.log('==========trying to fetch balance==========');

    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://mainnet.infura.io/'),
    );
    console.log(`address is ${JSON.stringify(ethAddress)}`);

    const rawBalance = await web3.eth.getBalance(ethAddress.hash);

    // eth has 18 decimal places
    const ethBase = 10 ** 18;

    console.log(`balance is ${rawBalance}`);
    return { ...ethAddress, balance: rawBalance / ethBase };
  }
}

export default Ethereum;
