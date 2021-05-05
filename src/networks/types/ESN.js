import tokens from '@/tokens/tokens-esn.json';
import contracts from '@/contracts/contract-abi-esn.json';
// import { VapAbi } from '../vnsAbis';

export default {
  name: 'ESN',
  name_long: 'VaporSocial',
  homePage: 'https://vaporsocial.org/',
  blockExplorerTX: 'https://vaporsocial.net/tx/[[txHash]]',
  blockExplorerAddr: 'https://vaporsocial.net/addr/[[address]]',
  chainID: 31102,
  tokens: tokens,
  contracts: contracts,
  vnsResolver: '',
  vnsAbi: ''
};
