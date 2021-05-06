import tokens from '@/tokens/tokens-vapo.json';
import contracts from '@/contracts/contract-abi-vapo.json';
import vapo from '@/assets/images/networks/vapo.svg';
// import { VapAbi } from '../vnsAbis';

export default {
  name: 'VAPO',
  name_long: 'Vapor1',
  homePage: 'vapor1.org',
  blockExplorerTX: 'https://explorer.vapor1.org/tx/[[txHash]]',
  blockExplorerAddr: 'https://explorer.vapor1.org/addr/[[address]]',
  chainID: 1313114,
  tokens: tokens,
  contracts: contracts,
  vnsResolver: '',
  vnsAbi: '',
  icon: vapo
};
