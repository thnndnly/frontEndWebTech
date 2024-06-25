<!-- src/components/LandingPage.vue -->
<template>
  <div>
    <h1>Welcome to Poker Hand Odds Calculator</h1>
    <form @submit.prevent="calculateOdds">
      <input v-model="hand" placeholder="Enter poker hand" />
      <button type="submit">Calculate Odds</button>
    </form>
    <div v-if="odds">
      <h2>Odds:</h2>
      <p>{{ odds }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      hand: '',
      odds: null,
    };
  },
  methods: {
    async calculateOdds() {
      try {
        const response = await axios.post('https://api.pokerstove.com/calculate', {
          hand: this.hand,
        });
        this.odds = response.data.odds;
      } catch (error) {
        console.error('Error calculating odds:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add some styles for better presentation */
form {
  margin: 20px 0;
}
input {
  margin-right: 10px;
}
</style>