<template lang="html">
  <div class="address-container">
    <div class="currency-container">
      <img :src="require(`@/assets/images/currency/${currency}.svg`)" >
      <p>
        <span class="currency-amt">
          {{ direction === 'from'? '-': '+' }} {{ tokenTransferVal !== '' ? tokenTransferVal:converter(value) }}
        </span>
        <span class="currency-type">{{ tokenSymbol !== '' ? tokenSymbol:currency.toUpperCase() }} </span>
      </p>
    </div>
    <div class="identicon-container">
      <p>{{ direction | capitalize }} Address</p>
    </div>
    <div class="address">
      {{ tokenTransferTo !== '' ? tokenTransferTo:address }}
    </div>
  </div>
</template>

<script>
import web3 from '@vapory/web3';
export default {
  props: {
    address: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      default: 'vap'
    },
    tokenTransferTo: {
      type: String,
      default: ''
    },
    tokenTransferVal: {
      type: String,
      default: ''
    },
    tokenSymbol: {
      type: String,
      default: ''
    }
  },
  methods: {
    converter(num) {
      return web3.utils.fromWei(num.toString(), 'vapor');
    }
  }
};
</script>

<style lang="scss">
@import 'AddressBlock.scss';
</style>
