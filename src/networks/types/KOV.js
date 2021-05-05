import tokens from '@/tokens/tokens-kov.json';
import contracts from '@/contracts/contract-abi-kov.json';
import kov from '@/assets/images/icons/network.svg';
// import { VapAbi } from '../vnsAbis';

export default {
  name: 'KOV',
  name_long: 'Kovan',
  homePage: 'https://kovan-testnet.github.io/website/',
  blockExplorerTX: 'https://kovan.vaporscan.com/tx/[[txHash]]',
  blockExplorerAddr: 'https://kovan.vaporscan.com/address/[[address]]',
  chainID: 42,
  tokens: tokens,
  contracts: contracts,
  vnsResolver: '',
  vnsAbi: '',
  icon: kov
};
