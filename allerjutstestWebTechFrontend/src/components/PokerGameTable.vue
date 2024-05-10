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
  { date: '2021-10-05', type: 'PLO', sb: 0.5, bb: 1, buyin: 300, cashout: 0 },
]

function colorByValue(value: number) {

}

</script>

<template>
  <div>
    <h1>poker history</h1>
    <table class="pokerTable">
      <thead>
      <tr>
        <th>Datum</th>
        <th>Spieltyp</th>
        <th>Small Blind</th>
        <th>Big Blind</th>
        <th>Buy-In</th>
        <th>Cash-Out</th>
        <th>Win/Loss</th>
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
        <td v-if="(entry.cashout - entry.buyin) < 0" class="valueNegative">{{ entry.cashout - entry.buyin}}</td>
        <td v-else class="valuePositive">{{ entry.cashout - entry.buyin}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

.valuePositive {
  color: green;
}
.valueNegative {
  color: red;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.pokerTable th {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #185875;
}

.pokerTable td {
  font-weight: normal;
  font-size: 1em;

}

.pokerTable {
  text-align: left;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

h1 {
  font-weight: bold;
  font-size: 2em;
  text-align: left;
  color: hsla(160, 100%, 37%, 1);
}


</style>
