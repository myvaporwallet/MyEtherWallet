import tokens from '@/tokens/tokens-egem.json';
import contracts from '@/contracts/contract-abi-egem.json';
import egem from '@/assets/images/networks/egem.svg';
// import { VapAbi } from '../vnsAbis';

export default {
  name: 'EGEM',
  name_long: 'VaporGem',
  homePage: 'https://egem.io/',
  blockExplorerTX: 'https://explorer.egem.io/tx/[[txHash]]',
  blockExplorerAddr: 'https://explorer.egem.io/addr/[[address]]',
  chainID: 1987,
  tokens: tokens,
  contracts: contracts,
  vnsResolver: '',
  vnsAbi: '',
  icon: egem
};
