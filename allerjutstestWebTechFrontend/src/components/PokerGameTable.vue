<script setup lang="ts">
import { defineComponent } from 'vue';

// Definieren des Types für die Pokereinträge
interface PokerEntry {
  date: string;
  type: string;
  sb: number;
  bb: number;
  buyin: number;
  cashout: number;
};

const PokerTracker = defineComponent({
  data() {
    return {
      entries: [
        { date: '2024-05-10', type: 'Holdem', sb: 1, bb: 2, buyin: 200, cashout: 350 },
        { date: '2024-05-11', type: 'Omaha', sb: 2, bb: 4, buyin: 300, cashout: 450 },
        // Weitere Einträge können hier eingefügt werden
      ] as PokerEntry[]
    };
  }
});

export { PokerTracker };
</script>

<template>
  <div>
    <h1>Poker Spiel Verlauf</h1>
    <table>
      <thead>
      <tr>
        <th>Datum</th>
        <th>Spieltyp</th>
        <th>Small Blind</th>
        <th>Big Blind</th>
        <th>Buy-In</th>
        <th>Cash-Out</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(entry, index) in entries" :key="index">
        <td>{{ entry.date }}</td>
        <td>{{ entry.type }}</td>
        <td>{{ entry.sb }}</td>
        <td>{{ entry.bb }}</td>
        <td>{{ entry.buyin }}</td>
        <td>{{ entry.cashout }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
