<template>
  <div id="app">
    <Header />
    <Section
      class="flex-fit"
      container="md">
      <h1>
        Staking on Zillet
      </h1>
      <h2 id="how-to-stake-zil-on-zillet">
        <a
          href="#how-to-stake-zil-on-zillet"
          aria-hidden="true">
          <span class="icon icon-link" />
        </a>
        How to stake ZILs on Zillet?
      </h2>
      <p><strong>Step 1.</strong> Select the <em>staking</em> tab. You'll see the stake option there. Just click on it.</p>
      <p><strong>Step 2.</strong> Enter the amount you want to stake and click on the stake button. Wait for the transaction to got confirmed</p>
      <p><strong>Step 1.5. (Optional)</strong> You can also choose the SSN node you want to delegte to</p>
      <p>Wait for transaction to got confirmed</p>
     
      <h2 id="what-are-the-benefits-of-delegating">
        <a
          href="#what-are-the-benefits-of-delegating?"
          aria-hidden="true">
          <span class="icon icon-link" />
        </a>
        What are the benefits of staking?
      </h2>
      <p>
        When you stake your ZILs, your receive ZIL and gZIL (Governance ZIL) as a reward, this means you are allowed to vote
        on governance proposals on the Zilliqa ecosystem. But the best part is that you receive ZIL over time. 
        This interest, reward, or inflation heavily incentivizes staking and is why you should delegate over long periods.
      </p> 
      <h2 id="who-should-you-delegate-your-zil-to">
        <a
          href="#who-should-you-delegate-your-zil-to"
          aria-hidden="true">
          <span class="icon icon-link" />
        </a>
        Who should you delegate your ZILs to?
      </h2>
      <p>
        There is no best choice. Every validator has its characteristics. However, most people want to pick the safest and most secure validator so 
        they don’t lose any money. It's good to choose an SSN with a lower commission rate and known name. 
        You can check the table for the commission rate and details about SSN below. 
      </p>
      <h2 id="who-should-you-delegate-your-zil-to">
        <a
          href="#why-should-i-delegate-to-zillet?"
          aria-hidden="true">
          <span class="icon icon-link" />
        </a>
        Why should I delegate to Zillet?
      </h2>
      <p>
        Zillet is an open-source project with no revenue source currently, and it's one of the main pieces of the Zilliqa ecosystem.
        Zillet also has a competitive commission rate, and all the commission earned will be used for the development of the wallet.
        So it'll help us if you delegate your ZILs to Zillet while maintaining your security. 
      </p>
      <h2 id="who-should-you-delegate-your-zil-to">
        <a
          href="#why-should-i-delegate-to-zillet?"
          aria-hidden="true">
          <span class="icon icon-link" />
        </a>
        How can I delegate my staked ZIL to Zillet?
      </h2>
      <p><strong>Step 1.</strong> Select the <em>staking</em> tab.You'll see the Transfer Stake option there. Just click on it.</p>
      <p><strong>Step 2.</strong>  Choose the delegator from you want to move your ZILs </p>
      <p><strong>Step 3.</strong>  Select Zillet in second dropdown if it's not selected already </p>
      <p><strong>Step 4</strong> Enter the amount you want to move and click on the Transfer button</p>
      <p>Wait for transaction to got confirmed</p>
      <h2 id="what-happen-if-a-ssn-you-have-chosen-is-down">
        <a
          href="#what-happen-if-a-ssn-you-have-chosen-is-down?"
          aria-hidden="true">
          <span class="icon icon-link" />
        </a>
        What happen if a ssn you have chosen is down?
      </h2>
      <p>
        Your ZIL will be safe. If the node you have chosen is down, then you will not receive rewards during that time.
      </p> 
      <h2 id="what-happen-if-a-ssn-you-have-chosen-is-down">
        <a
          href="#what-happen-if-a-ssn-you-have-chosen-is-down?"
          aria-hidden="true">
          <span class="icon icon-link" />
        </a>
        What's the waiting period if I want to unstake my ZIL?
      </h2>
      <p>
        Delegating means that your ZIL cannot be transferred for 2 weeks, but you can redelegate to other SSN instantly.
      </p> 
      <h2 id="staked-seed-nodes">
        <a
          href="#staked-seed-nodes"
          aria-hidden="true">
          <span class="icon icon-link" />
        </a>
        Staked Seed Nodes (SSNs)
      </h2>
      <table>
        <tr class="table--header">
          <th>SSN Name</th>
          <th>Total Staked Amount <span class="secondry-text">( in ZIL)</span></th>
          <th>Comission Rate  <span class="secondry-text">( in %)</span></th>
        </tr>
        <tr
          v-for="ssn in formattedSsns"
          :key="ssn.name">
          <td>
            <b :class="{'text-primary': ssn.isZillet}">{{ ssn.name }}</b>
          </td>
          <td class="staked-amount">
            {{ ssn.totalStake * Math.pow(10, -12) | currency('', 2) }}
            &nbsp;
            <div class="secondry-text">
              ({{ (ssn.totalStake/totalStaked*100) | currency('', 2) }} %)
            </div>
          </td>
          <td>{{ ssn.commision | currency('', 2) }}</td>
        </tr>
      </table>
    </Section>
    <Footer />
  </div>
</template>
<script>
import Vue2Filters from 'vue2-filters';
import axios from 'axios';
import Header from './../layouts/partials/Header';
import Subheader from './../layouts/partials/Subheader';
import Footer from './../layouts/partials/Footer';
import { log } from 'util';
const { Zilliqa } = require('@zilliqa-js/zilliqa');
import { toBech32Address, toChecksumAddress } from '@zilliqa-js/crypto';
const zilliqa = new Zilliqa('https://api.zilliqa.com');

export default {
  name: 'GettingStarted',
  components: {
    Header,
    Footer
  },
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      config: '',
      contractInstances: {},
      fetched: false,
      ssnlist: {}
    };
  },
  computed: {
    formattedSsns() {
      let list = [];
      let zilletSsn = {};
      for (const key in this.ssnlist) {
        const ssn = this.ssnlist[key].arguments;
        const obj = {
          name: ssn[3],
          stakingUrl: ssn[4],
          commision: ssn[7] * Math.pow(10, -7),
          address: toBech32Address(ssn[9]),
          totalStake: parseInt(ssn[1]),
          commisionReward: parseInt(ssn[8]),
          bufferedDeposit: parseInt(ssn[6]),
          stakingApi: ssn[4],
          normalApi: ssn[5]
        };
        if (obj.name.toLowerCase() == 'zillet') {
          obj.isZillet = true;
          zilletSsn = obj;
        } else {
          list.push(obj);
        }
      }
      list = this.orderBy(list, 'totalStake', -1);
      if (zilletSsn.name) {
        return [zilletSsn].concat(list);
      }
      return list;
    },
    totalStaked() {
      let total = 0;
      for (const key in this.ssnlist) {
        const ssn = this.ssnlist[key].arguments;
        total = total + parseInt(ssn[1]);
      }
      return total;
    }
  },
  async beforeMount() {
    // fetcch contract detauls\\
    try {
      const { data } = await axios.get(
        'https://raw.githubusercontent.com/zillet/zillet/master/app/config.json'
      );
      this.config = data;
    } catch (error) {
      console.log(error);
    }
    await this.init();
  },
  methods: {
    async init() {
      const ssnContractAddr = this.config.STAKING.mainnet.ssnlist;
      console.log(`ssnlist contract ... ` + ssnContractAddr);
      this.contractInstances = zilliqa.contracts.at(ssnContractAddr);
      const { ssnlist } = await this.contractInstances.getSubState(
        'ssnlist',
        []
      );
      this.ssnlist = ssnlist;
      console.log(this.ssnlist);
    },
    formatSsns() {}
  }
};
</script>
<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app main {
  flex: 1;
}
.text-primary {
  color: var(--primary-color);
}

table tr th,
table tr td {
  padding: 1rem;
}
.table--header {
  background: var(--code-color);
}
.secondry-text {
  opacity: 0.85;
  /* font-weight: normal; */
  font-size: 0.8rem;
}
.staked-amount {
  display: flex;
}
</style>
