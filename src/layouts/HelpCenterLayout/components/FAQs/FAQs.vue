<template>
  <div class="faqs">
    <div class="wrap">

      <div class="qa-cards">
        <ul class="qa__contents">
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq1')">
              <h3>Balances not loading or showing on MyVaporWallet</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq1 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq1 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq1"
              class="qa__contents--content">
              <faq-balances-not-loading />
            </div>
          </li>
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq2')">
              <h3>Does MyVaporWallet support Bitcoin or other coins (LTC STEEM ZEC)?</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq2 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq2 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq2"
              class="qa__contents--content">
              <faq-does-myvaporwallet-support-bitcoin />
            </div>
          </li>
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq3')">
              <h3>VAP or Tokens sent to or from exchange haven't shown up</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq3 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq3 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq3"
              class="qa__contents--content">
              <faq-vap-or-tokens-sent-to />
            </div>
          </li>
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq4')">
              <h3>Where Can I Buy / Sell / Trade / Exchange my VAP or Tokens?</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq4 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq4 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq4"
              class="qa__contents--content">
              <faq-where-can-i-buy-sell />
            </div>
          </li>
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq5')">
              <h3>What Is An ICO?</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq5 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq5 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq5"
              class="qa__contents--content">
              <faq-what-is-an-ico />
            </div>
          </li>

          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq6')">
              <h3>How to buy Vapory(VAP) with USD?</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq6 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq6 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq6"
              class="qa__contents--content">
              <faq-how-to-buy-vapory-with-usd />
            </div>
          </li>
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq7')">
              <h3>Couldn't everybody put in random private keys, look for a balance, and send to their own address?</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq7 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq7 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq7"
              class="qa__contents--content">
              <faq-couldnt-everybody-put-in-random-private-keys />
            </div>
          </li>
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq8')">
              <h3>What happens if MyVaporWallet goes down?</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq8 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq8 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq8"
              class="qa__contents--content">
              <faq-what-happens-if-my-vapor-wallet-goes-down />
            </div>
          </li>
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq9')">
              <h3>How do I interact with a Multisig Contract?</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq9 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq9 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq9"
              class="qa__contents--content">
              <faq-how-do-i-interact-with-a-multisig-contract />
            </div>
          </li>
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq10')">
              <h3>Check the current block number on MyVaporWallet</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq10 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq10 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq10"
              class="qa__contents--content">
              <faq-check-the-current-block-number-on-my-vapor-wallet />
            </div>
          </li>
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq11')">
              <h3>When I unlock via keystore file, it freezes my browser</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq11 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq11 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq11"
              class="qa__contents--content">
              <faq-when-i-unlock-via-keystore-file-it-freezes-my-browser />
            </div>
          </li>
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq12')">
              <h3>Withdrawing DAO tokens</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq12 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq12 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq12"
              class="qa__contents--content">
              <faq-withdrawing-dao-tokens />
            </div>
          </li>
          <li>
            <div
              class="qa__contents--title"
              @click="openFAQ('faq13')">
              <h3>Why don't you make me move my mouse to generate a seed?</h3>
              <div class="show-more-buttons">
                <span
                  v-if="showFAQs.faq13 == false"
                  class="show-more">+</span>
                <span
                  v-if="showFAQs.faq13 == true"
                  class="show-less">-</span>
              </div>
            </div>
            <div
              v-if="showFAQs.faq13"
              class="qa__contents--content">
              <faq-why-dont-you-make-me-move-my-mouse-to-generate-a-seed />
            </div>
          </li>

        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import {
  BalancesNotLoadingOrShowingOnMyVaporWallet,
  VapOrTokensSentToOrFromExchangeHaventShownUp,
  DoesMyVaporWalletSupportBitcoinOrOtherCoins,
  WhereCanIBuySellTradeExchangeMyVapOrTokens,
  WhatIsAnIco,
  HowToBuyVaporyWithUSD,
  CouldntEverybodyPutInRandomPrivateKeys,
  WhatHappensIfMyVaporWalletGoesDown,
  HowDoIInteractWithAMultisigContract,
  CheckTheCurrentBlockNumberOnMyVaporWallet,
  WhenIUnlockViaKeystoreFileItFreezesMyBrowser,
  WithdrawingDAOTokens,
  WhyDontYouMakeMeMoveMyMouseToGenerateASeed
} from '@/components/FaqContents';

export default {
  components: {
    'faq-balances-not-loading': BalancesNotLoadingOrShowingOnMyVaporWallet,
    'faq-vap-or-tokens-sent-to': VapOrTokensSentToOrFromExchangeHaventShownUp,
    'faq-does-myvaporwallet-support-bitcoin': DoesMyVaporWalletSupportBitcoinOrOtherCoins,
    'faq-where-can-i-buy-sell': WhereCanIBuySellTradeExchangeMyVapOrTokens,
    'faq-what-is-an-ico': WhatIsAnIco,
    'faq-how-to-buy-vapory-with-usd': HowToBuyVaporyWithUSD,
    'faq-couldnt-everybody-put-in-random-private-keys': CouldntEverybodyPutInRandomPrivateKeys,
    'faq-what-happens-if-my-vapor-wallet-goes-down': WhatHappensIfMyVaporWalletGoesDown,
    'faq-how-do-i-interact-with-a-multisig-contract': HowDoIInteractWithAMultisigContract,
    'faq-check-the-current-block-number-on-my-vapor-wallet': CheckTheCurrentBlockNumberOnMyVaporWallet,
    'faq-when-i-unlock-via-keystore-file-it-freezes-my-browser': WhenIUnlockViaKeystoreFileItFreezesMyBrowser,
    'faq-withdrawing-dao-tokens': WithdrawingDAOTokens,
    'faq-why-dont-you-make-me-move-my-mouse-to-generate-a-seed': WhyDontYouMakeMeMoveMyMouseToGenerateASeed
  },
  data() {
    return {
      showFAQs: {
        faq1: false,
        faq2: false,
        faq3: false,
        faq4: false,
        faq5: false,
        faq6: false,
        faq7: false,
        faq8: false,
        faq9: false,
        faq10: false,
        faq11: false,
        faq12: false,
        faq13: false
      }
    };
  },
  methods: {
    openFAQ: function(faqToOpen) {
      const currentState = this.showFAQs[faqToOpen];
      this.showFAQs[faqToOpen] = !currentState;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'FAQs.scss';
</style>
