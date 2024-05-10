<script setup lang="ts">

// Definieren des Types für die Pokereinträge
interface PokerEntry {
  date: string;
  type: string;
  sb: number;
  bb: number;
  buyin: number;
  cashout: number;
};

// Array mit Beispieldaten
let pokerEntryData: PokerEntry[] = [
  { date: '2021-10-01', type: 'NLHE', sb: 0.5, bb: 1, buyin: 100, cashout: 150 },
  { date: '2021-10-02', type: 'PLO', sb: 0.5, bb: 1, buyin: 200, cashout: 250 },
  { date: '2021-10-03', type: 'NLHE', sb: 0.5, bb: 1, buyin: 150, cashout: 100 },
  { date: '2021-10-04', type: 'NLHE', sb: 0.5, bb: 1, buyin: 100, cashout: 200 },
  { date: '2021-10-05', type: 'PLO', sb: 0.5, bb: 1, buyin: 300, cashout: 350 },
]

</script>

<template>
  <div>
    <h1 class="green">Poker Spiel Verlauf</h1>
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
      <tr v-for="(entry, index) in pokerEntryData" :key="index">
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
table {
  width: 100%;
  border-collapse: collapse;
}

</style>
