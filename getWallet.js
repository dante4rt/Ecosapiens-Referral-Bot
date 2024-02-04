const { Wallet, ethers } = require('ethers');

function createAccountETH() {
  const wallet = ethers.Wallet.createRandom();
  const privateKey = wallet.privateKey;
  const theWallet = new Wallet(privateKey);

  return theWallet.address;
}

module.exports = createAccountETH;
