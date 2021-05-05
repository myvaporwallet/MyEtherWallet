import nodeList from '@/networks';
const state = {
  web3: {},
  network: {
    auth: false,
    password: '',
    port: 443,
    service: 'myvaporwallet.com',
    type: {
      blockExplorerAddr: 'https://ropsten.vaporscan.com/address/[[txHash]]',
      blockExplorerTX: 'https://ropsten.vaporscan.com/tx/[[txHash]]',
      chainID: 3,
      contracts: [],
      homePage: 'https://github.com/vapory/ropsten',
      name: 'ROP',
      name_long: 'Ropsten',
      tokens: []
    },
    url: 'https://api.myvaporwallet.com/rop',
    username: ''
  },
  wallet: null,
  account: {
    balance: 0
  },
  Transactions: {},
  Networks: nodeList,
  Errors: {},
  online: true,
  customPaths: {},
  notifications: {},
  gasPrice: 41,
  vns: {}
};

export default state;
