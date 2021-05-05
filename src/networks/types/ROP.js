import tokens from '@/tokens/tokens-rop.json';
import contracts from '@/contracts/contract-abi-rop.json';
import rop from '@/assets/images/icons/network.svg';
import { RopAbi } from '../vnsAbis';

export default {
  name: 'ROP',
  name_long: 'Ropsten',
  homePage: 'https://github.com/vapory/ropsten',
  blockExplorerTX: 'https://ropsten.vaporscan.com/tx/[[txHash]]',
  blockExplorerAddr: 'https://ropsten.vaporscan.com/address/[[address]]',
  chainID: 3,
  tokens: tokens,
  contracts: contracts,
  vnsResolver: '0x112234455c3a32fd11230c42e7bccd4a84e02010',
  vnsAbi: RopAbi,
  icon: rop
};
