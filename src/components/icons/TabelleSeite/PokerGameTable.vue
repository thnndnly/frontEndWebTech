<script setup lang="ts">

import {computed, reactive, ref, type UnwrapNestedRefs} from "vue";

let entryID = 0;

const newEntry = {
  id: 0,
  date: '',
  type: '',
  sb: 0,
  bb: 0,
  buyin: 0,
  cashout: 0
};

entryID++;
let pokerEntryData = reactive({
  pokerGameEntry: [
    { id: entryID++, date: '2021-10-01', type: 'NLHE', sb: 0.5, bb: 1, buyin: 100, cashout: 150 },
    { id: entryID++, date: '2021-10-02', type: 'PLO', sb: 0.5, bb: 1, buyin: 200, cashout: 250 },
    { id: entryID++, date: '2021-10-03', type: 'NLHE', sb: 0.5, bb: 1, buyin: 150, cashout: 100 },
    { id: entryID++, date: '2021-10-04', type: 'NLHE', sb: 0.5, bb: 1, buyin: 100, cashout: 200 },
    { id: entryID++, date: '2021-10-05', type: 'PLO', sb: 0.5, bb: 1, buyin: 300, cashout: 0 },
  ]
})

function addPokerEntry() {
  pokerEntryData.pokerGameEntry.push({ id: newEntry.id, date: newEntry.date, type: newEntry.type, sb: newEntry.sb, bb: newEntry.bb, buyin: newEntry.buyin, cashout: newEntry.cashout})
}

function deleteEntry(entryToDelete: UnwrapNestedRefs<{
  date: string;
  bb: number;
  buyin: number;
  id: number;
  type: string;
  sb: number;
  cashout: number
}>) {
  pokerEntryData.pokerGameEntry = pokerEntryData.pokerGameEntry.filter((e) => e.id !== entryToDelete.id);
}

function addNewEntry() {
  addPokerEntry();
  newEntry.id = entryID++;
  newEntry.date = '';
  newEntry.type = '';
  newEntry.sb = 0;
  newEntry.bb = 0;
  newEntry.buyin = 0;
  newEntry.cashout = 0;
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
    <h1 id="tableHeader">poker history</h1>
    <table class="pokerTable">
      <thead>
      <tr class="agua">
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
      <tr v-for="entry in pokerEntryData.pokerGameEntry" :key="entry.id">
        <td>{{ entry.date }}</td>
        <td>{{ entry.type }}</td>
        <td>{{ entry.sb }}</td>
        <td>{{ entry.bb }}</td>
        <td>{{ entry.buyin }}</td>
        <td>{{ entry.cashout }}</td>
        <td v-if="(entry.cashout - entry.buyin) < 0" class="valueNegative">{{ entry.cashout - entry.buyin}}</td>
        <td v-else class="valuePositive">{{ entry.cashout - entry.buyin }}</td>
        <td>
          <button @click="deleteEntry(entry)" class="deleteButton">
            <img alt="Delete Row Icon" class="logo" src="../../../assets/IconDeleteWhite.png"/>
          </button>
        </td>
      </tr>
      <tr>
        <td><input type="text" id="date" v-model="newEntry.date" :style="{ width: columnWidths.date }" placeholder="Datum"></td>
        <td><input type="text" id="type" v-model="newEntry.type" :style="{ width: columnWidths.type }" placeholder="Spieltyp"></td>
        <td><input type="text" id="sb" v-model="newEntry.sb" :style="{ width: columnWidths.sb }"></td>
        <td><input type="text" id="bb" v-model="newEntry.bb" :style="{ width: columnWidths.bb }"></td>
        <td><input type="text" id="buyin" v-model="newEntry.buyin" :style="{ width: columnWidths.buyin }"></td>
        <td><input type="text" id="cashout" v-model="newEntry.cashout" :style="{ width: columnWidths.cashout }"></td>
        <td><button @click="addNewEntry()" id="addEntryButton">addEntry</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

.logo {
  width: 25px;
  height: 25px;
  background: tomato;
  border-radius: 15%;
}

.deleteButton {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

input[type=text] {
  border: 2px solid #007bff;;
  border-radius: 2px;
  background-color: #181818;
  outline: none;
  color: rgba(235, 235, 235, 0.64);
}

button {
  border: 0 solid;
  border-radius: 4px;
  background-color: #181818;
  color: red;
}

#addEntryButton {
  border: 2px solid #007bff;;
  border-radius: 4px;
  background-color: #007bff;;
  outline: none;
  color: black;
}

.valuePositive {
  color: mediumseagreen;
}
.valueNegative {
  color: tomato;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.pokerTable th {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
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
  color: #c40000; /* Gelb in Hex */

}

</style>
