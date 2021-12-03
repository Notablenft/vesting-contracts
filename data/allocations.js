const web3 = require('web3');

const tokens = amount => web3.utils.toWei(amount, 'ether');

module.exports = {
  advisors: {
    address: '0x4B84A054a4Ec37A2f89Eb420dD68582508C5e039',
    amount: tokens('10000000'),
  },
  team: {
    address: '0x714806C82DF5A74352636C1651EB9d0b3ae8145A',
    amount: tokens('18000000'),
  },
  foundation: {
    address: '0x825aa0b269EAc1487Af455fc5cfF41CE4b183E03',
    amount: tokens('9000000'),
  },
  marketing: {
    address: '0xba9B7AC3688B93a2AA23f31C280179996Ad945a1',
    amount: tokens('15000000'),
  },
  staking: {
    address: '0x963EcB16f5D8bBE1f55d282c2dBE0c73f56d597A',
    amount: tokens('5000000'),
  },
  cex: {
    address: '0xaE040e8b98d9179d327974cdf597868Ca4DD270D',
    amount: tokens('5891700'),
  },
  mock: {
    address: '0xaE040e8b9809179d527974cdf517868Ca4DD270D',
    amount: tokens('9876'),
  },
};


10000000000000000000000000