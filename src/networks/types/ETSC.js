import tokens from '@/tokens/tokens-etsc.json';
import contracts from '@/contracts/contract-abi-etsc.json';
import etsc from '@/assets/images/networks/etsc.svg';
// import { VapAbi } from '../vnsAbis';

export default {
  name: 'ETSC',
  name_long: 'VaporySocial',
  homePage: 'https://vaporysocial.kr/',
  blockExplorerTX: 'https://explorer.vaporysocial.kr/tx/[[txHash]]',
  blockExplorerAddr: 'https://explorer.vaporysocial.kr/addr/[[address]]',
  chainID: 28,
  tokens: tokens,
  contracts: contracts,
  vnsResolver: '',
  vnsAbi: '',
  icon: etsc
};
