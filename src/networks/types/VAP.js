import tokens from '@/tokens/tokens-vap.json';
import contracts from '@/contracts/contract-abi-vap.json';
import vap from '@/assets/images/networks/vap.svg';
import { VapAbi } from '../vnsAbis';

export default {
  name: 'VAP',
  name_long: 'Vapory',
  homePage: 'https://vapory.org',
  blockExplorerTX: 'https://vaporscan.com/tx/[[txHash]]',
  blockExplorerAddr: 'https://vaporscan.com/address/[[address]]',
  chainID: 1,
  tokens: tokens,
  contracts: contracts,
  vnsResolver: '0x314159265dd8dbb310642f98f50c066173c1259b',
  vnsAbi: VapAbi,
  icon: vap
};
