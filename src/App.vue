<template>
  <div id="app">
    <header-container/>
    <router-view/>
    <footer-container/>
    <confirmation-container/>
  </div>
</template>

<script>
import FooterContainer from '@/containers/FooterContainer';
import HeaderContainer from '@/containers/HeaderContainer';
import ConfirmationContainer from '@/containers/ConfirmationContainer';
import store from 'store';
import nodeList from '@/networks';
import Web3 from '@vapory/web3';
import VNS from 'vapory-vns';
import url from 'url';

export default {
  name: 'App',
  components: {
    'header-container': HeaderContainer,
    'footer-container': FooterContainer,
    'confirmation-container': ConfirmationContainer
  },
  mounted() {
    // Can't use before mount because that lifecycle isn't called if serving via static files
    const network =
      store.get('network') !== undefined
        ? store.get('network')
        : this.$store.state.Networks['VAP'][3];
    const hostUrl = url.parse(network.url);
    const newWeb3 = new Web3(
      `${hostUrl.protocol}//${hostUrl.hostname}:${network.port}${
        hostUrl.pathname
      }`
    );
    const notifications =
      store.get('notifications') !== undefined
        ? store.get('notifications')
        : {};
    const gasPrice =
      store.get('gasPrice') !== undefined ? store.get('gasPrice') : 41;
    const state = {
      web3: newWeb3,
      network: network,
      customPaths:
        store.get('customPaths') !== undefined ? store.get('customPaths') : {},
      wallet: null,
      account: {
        balance: 0
      },
      Transactions: {},
      Networks: nodeList,
      Errors: {},
      online: true,
      notifications: notifications,
      gasPrice: gasPrice,
      vns:
        network.type.vnsResolver !== '' ? new VNS(newWeb3.currentProvider) : {}
    };
    if (store.get('notifications') === undefined)
      store.set('notifications', {});
    this.$store.dispatch('setState', state);
    this.$store.dispatch('checkIfOnline');
    this.$store.dispatch('switchNetwork', network);
  }
};
</script>

<style lang="scss">
@import 'App.scss';
</style>
