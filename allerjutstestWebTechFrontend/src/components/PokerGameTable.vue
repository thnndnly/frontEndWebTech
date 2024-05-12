<script setup lang="ts">

import {ref} from "vue";

let entryID = 0;

let pokerEntryData: pokerGameEntry[] = [
  { id: entryID++, date: '2021-10-01', type: 'NLHE', sb: 0.5, bb: 1, buyin: 100, cashout: 150 },
  { id: entryID++, date: '2021-10-02', type: 'PLO', sb: 0.5, bb: 1, buyin: 200, cashout: 250 },
  { id: entryID++, date: '2021-10-03', type: 'NLHE', sb: 0.5, bb: 1, buyin: 150, cashout: 100 },
  { id: entryID++, date: '2021-10-04', type: 'NLHE', sb: 0.5, bb: 1, buyin: 100, cashout: 200 },
  { id: entryID++, date: '2021-10-05', type: 'PLO', sb: 0.5, bb: 1, buyin: 300, cashout: 0 },

]

const newEntry = ref<pokerGameEntry>({
  id: entryID++,
  date: '',
  type: '',
  sb: 0,
  bb: 0,
  buyin: 0,
  cashout: 0
});

function addPokerEntry(entry: pokerGameEntry) {
  pokerEntryData.push(entry)
}

function addNewEntry() {
  addPokerEntry(newEntry.value);
  newEntry.value = {
    id: 0,
    date: '',
    type: '',
    sb: 0,
    bb: 0,
    buyin: 0,
    cashout: 0
  };
}

function deleteEntry(entry: pokerGameEntry) {
  pokerEntryData = pokerEntryData.filter(e => e.id !== entry.id);
}

const columnWidths = {
  date: '100px', // Beispielbreite für Datumsspalte
  type: '80px', // Beispielbreite für Spalte Spieltyp
  sb: '100px', // Beispielbreite für Spalte Small Blind
  bb: '100px', // Beispielbreite für Spalte Big Blind
  buyin: '80px', // Beispielbreite für Spalte Buy-In
  cashout: '80px' // Beispielbreite für Spalte Cash-Out
};

</script>

<template>
  <div id="pokerTabel">
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
        <td><button @click="deleteEntry(entry)">X</button></td>
      </tr>
      <tr>
        <td><input type="text" id="date" v-model="newEntry.date" :style="{ width: columnWidths.date }"></td>
        <td><input type="text" id="type" v-model="newEntry.type" :style="{ width: columnWidths.type }"></td>
        <td><input type="text" id="sb" v-model="newEntry.sb" :style="{ width: columnWidths.sb }"></td>
        <td><input type="text" id="bb" v-model="newEntry.bb" :style="{ width: columnWidths.bb }"></td>
        <td><input type="text" id="buyin" v-model="newEntry.buyin" :style="{ width: columnWidths.buyin }"></td>
        <td><input type="text" id="cashout" v-model="newEntry.cashout" :style="{ width: columnWidths.cashout }"></td>
        <td><button @click="addNewEntry()">addEntry</button></td>
      </tr>
      </tbody>
    </table>
  </div>
  <div id="pokerEntryAdd">

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
