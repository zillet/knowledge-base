<template>
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
</template>
<script>
import axios from 'axios';
import Vue2Filters from 'vue2-filters';

const { Zilliqa } = require('@zilliqa-js/zilliqa');
import { toBech32Address, toChecksumAddress } from '@zilliqa-js/crypto';
const zilliqa = new Zilliqa('https://api.zilliqa.com');

export default {
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
