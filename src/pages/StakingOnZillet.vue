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
      <p><strong>Step 2.</strong> Enter the amount you want to stake and click on the stake button.</p>
      <!-- <p><strong>Step 1.5. (Optional)</strong> You can also choose the SSN node you want to delegte to</p> -->
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
        When you stake your ZILs, your receive ZIL as a reward.
        This interest, reward, or inflation heavily incentivizes staking and is why you should delegate over long periods.
      </p> 
      <!-- <h2 id="who-should-you-delegate-your-zil-to">
        <a
          href="#who-should-you-delegate-your-zil-to"
          aria-hidden="true">
          <span class="icon icon-link" />
        </a>
        Who should you delegate your ZILs to?
      </h2>
      <p>
        There is no best choice. Every SSN has its characteristics. However, most people want to pick the safest and most
        secure SSN so they don’t lose any rewards. However, it is a general misunderstanding that
        there is a single best SSN to delegate safely. The best SSN to safely delegate is all of them.
        If you spread your ZILs across all SSNs, the risk is the lowest. 
        You can check the table for the commission rate and details about SSN below.
      </p> -->
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
      <!-- <h2 id="who-should-you-delegate-your-zil-to">
        <a
          href="#why-should-i-delegate-to-zillet?"
          aria-hidden="true">
          <span class="icon icon-link" />
        </a>
        How can I delegate my staked ZIL to other SSN (ex. Zillet)?
      </h2>
      <p><strong>Step 1.</strong> Select the <em>staking</em> tab.You'll see the Transfer Stake option there. Just click on it.</p>
      <p><strong>Step 2.</strong>  Choose the delegator from you want to move your ZILs </p>
      <p><strong>Step 3.</strong>  Select the SSN you want to redelegate your amount to (ex. Zillet) in second dropdown </p>
      <p><strong>Step 4</strong> Enter the amount you want to move and click on the Transfer button</p>
      <p>Wait for transaction to got confirmed</p> -->
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
        Delegating means that your ZIL cannot be transferred for 2 weeks
      </p> 
      <!-- <h2 id="staked-seed-nodes">
        <a
          href="#staked-seed-nodes"
          aria-hidden="true">
          <span class="icon icon-link" />
        </a>
        Staked Seed Nodes (SSNs)
      </h2>
      <Ssn /> -->
    </Section>
    <Footer />
  </div>
</template>
<script>
import Header from './../layouts/partials/Header';
import Footer from './../layouts/partials/Footer';
// import Ssn from './../components/Ssn';

export default {
  name: 'GettingStarted',
  components: {
    Header,
    Footer
    // Ssn
  },
  metaInfo: {
    title: 'How to stake ZIL (Zilliqa) on Zillet'
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
</style>
