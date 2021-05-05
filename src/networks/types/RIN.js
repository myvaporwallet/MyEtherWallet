import tokens from '@/tokens/tokens-rin.json';
import contracts from '@/contracts/contract-abi-rin.json';
import rin from '@/assets/images/icons/network.svg';
import { RinAbi } from '../vnsAbis';

export default {
  name: 'RIN',
  name_long: 'Rinkeby',
  homePage: 'https://www.rinkeby.io/',
  blockExplorerTX: 'https://rinkeby.vaporscan.com/tx/[[txHash]]',
  blockExplorerAddr: 'https://rinkeby.vaporscan.com/address/[[address]]',
  chainID: 4,
  tokens: tokens,
  contracts: contracts,
  vnsResolver: '0xe7410170f87102DF0055eB195163A03B7F2Bff4A',
  vnsAbi: RinAbi,
  icon: rin
};
