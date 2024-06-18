<script setup lang="ts">
import {computed, onMounted, reactive, type Ref, ref, type UnwrapNestedRefs} from "vue";
import axios, {type AxiosResponse} from "axios";

const newEntry = {
  date: '',
  gametype: '',
  sb: 0,
  bb: 0,
  buyIn: 0,
  cashOut: 0,
  owner: getOwner()
};

function getOwner(){
  return 'derG'
}

const pokerEntryData : Ref<gameEntry[]> = ref([])

function deleteEntry(id: number){
  return null
}

async function fetchGameEntries(owner: string) {
  const url = 'https://allerjutsteswebtechprojekt.onrender.com/pokerGameEntries'
  const endpoint = url + '?owner=' + owner
  console.log('fetch url', endpoint)
  const response: AxiosResponse = await axios.get(endpoint)
  const responseData: gameEntry[] = response.data
  responseData.forEach((entry: gameEntry) => {
    pokerEntryData.value.push(entry)
  })
}

// Chat magic
async function sendGameEntry() {
  const url = 'https://allerjutsteswebtechprojekt.onrender.com/pokerGameEntries';

  const response: AxiosResponse = await axios.post(url, newEntry)
  const responseData: gameEntry = response.data
  console.log('Success:', responseData)
}

function addNewEntry() {
  sendGameEntry();
  newEntry.date = '';
  newEntry.gametype = '';
  newEntry.sb = 0;
  newEntry.bb = 0;
  newEntry.buyIn = 0;
  newEntry.cashOut = 0;
}

const columnWidths = {
  date: '100px', // Beispielbreite für Datumsspalte
  type: '80px', // Beispielbreite für Spalte Spieltyp
  sb: '100px', // Beispielbreite für Spalte Small Blind
  bb: '100px', // Beispielbreite für Spalte Big Blind
  buyin: '80px', // Beispielbreite für Spalte Buy-In
  cashout: '80px' // Beispielbreite für Spalte Cash-Out
};

onMounted(async()=> {
  await fetchGameEntries('derG')
})

</script>

<template>
  <div id="pokerTable">
    <h1 id="tableHeader">Poker History</h1>
    <table class="pokerTable">
      <thead>
      <tr class="header-row">
        <th>Datum</th>
        <th>Spieltyp</th>
        <th>Small Blind</th>
        <th>Big Blind</th>
        <th>Buy-In</th>
        <th>Cash-Out</th>
        <th>Win/Loss</th>
        <th>Aktion</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="entry in pokerEntryData" :key="entry.id" class="data-row">
        <td>{{ entry.date }}</td>
        <td>{{ entry.gametype }}</td>
        <td>{{ entry.sb }}</td>
        <td>{{ entry.bb }}</td>
        <td>{{ entry.buyIn }}</td>
        <td>{{ entry.cashOut }}</td>
        <td :class="(entry.cashOut - entry.buyIn) < 0 ? 'valueNegative' : 'valuePositive'">
          {{ entry.cashOut - entry.buyIn }}
        </td>
        <td>
          <button @click="deleteEntry(entry.id)" class="deleteButton">
            <img alt="Delete Row Icon" class="logo" src="../../assets/IconDeleteWhite.png"/>
          </button>
        </td>
      </tr>
      <tr class="input-row">
        <td><input type="text" id="date" v-model="newEntry.date" :style="{ width: columnWidths.date }" placeholder="Datum"></td>
        <td><input type="text" id="type" v-model="newEntry.gametype" :style="{ width: columnWidths.type }" placeholder="Spieltyp"></td>
        <td><input type="text" id="sb" v-model="newEntry.sb" :style="{ width: columnWidths.sb }" placeholder="SB"></td>
        <td><input type="text" id="bb" v-model="newEntry.bb" :style="{ width: columnWidths.bb }" placeholder="BB"></td>
        <td><input type="text" id="buyin" v-model="newEntry.buyIn" :style="{ width: columnWidths.buyin }" placeholder="Buy-In"></td>
        <td><input type="text" id="cashout" v-model="newEntry.cashOut" :style="{ width: columnWidths.cashout }" placeholder="Cash-Out"></td>
        <td><button @click="addNewEntry()" id="addEntryButton">Add Entry</button></td>
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
  border: 2px solid #007bff;
  border-radius: 2px;
  background-color: #181818;
  outline: none;
  color: rgba(235, 235, 235, 0.64);
  padding: 5px;
}

button {
  border: 0 solid;
  border-radius: 4px;
  background-color: #181818;
  color: red;
  padding: 5px 10px;
}

#addEntryButton {
  border: 2px solid #007bff;
  border-radius: 4px;
  background-color: #007bff;
  outline: none;
  color: white;
  padding: 5px 10px;
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

.pokerTable th, .pokerTable td {
  padding: 10px;
  border: 1px solid #444;
}

.pokerTable th {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  background-color: #2a2a2a;
  color: white;
}

.pokerTable td {
  background-color: #1b1b1b;
  color: white;
}

.header-row {
  background-color: #2a2a2a;
}

.data-row {
  background-color: #1b1b1b;
}

.input-row {
  background-color: #2a2a2a;
}

h1 {
  font-weight: bold;
  font-size: 2em;
  text-align: left;
  color: #c40000;
}
</style>