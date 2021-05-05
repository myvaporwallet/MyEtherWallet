import tokens from '@/tokens/tokens-exp.json';
import contracts from '@/contracts/contract-abi-exp.json';
import exp from '@/assets/images/networks/exp.svg';
// import { VapAbi } from '../vnsAbis';

export default {
  name: 'EXP',
  name_long: 'Expanse',
  homePage: 'https://expanse.tech/',
  blockExplorerTX: 'http://www.gander.tech/tx/[[txHash]]',
  blockExplorerAddr: 'http://www.gander.tech/address/[[address]]',
  chainID: 2,
  tokens: tokens,
  contracts: contracts,
  vnsResolver: '',
  vnsAbi: '',
  icon: exp
};
