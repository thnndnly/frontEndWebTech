<script setup lang="ts">

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
        <th></th> <!-- Leere Zelle für den Löschen-Button -->
      </tr>
      </thead>
      <tbody>
      <tr class="data-row">
        <td>2024-06-19</td>
        <td>Hold'em</td>
        <td>5</td>
        <td>10</td>
        <td>50</td>
        <td>100</td>
        <td class="valuePositive">50</td>
        <td>
          <button class="deleteButton">
            <img alt="Delete Row Icon" class="logo" src="../../assets/IconDeleteWhite.png"/>
          </button>
        </td>
      </tr>
      <tr class="input-row">
        <td><input type="text" id="date" placeholder="Datum"></td>
        <td><input type="text" id="type" placeholder="Spieltyp"></td>
        <td><input type="text" id="sb" placeholder="SB"></td>
        <td><input type="text" id="bb" placeholder="BB"></td>
        <td><input type="text" id="buyin" placeholder="Buy-In"></td>
        <td><input type="text" id="cashout" placeholder="Cash-Out"></td>
        <td><button id="addEntryButton">Add Entry</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
body {
  background-color: #FFCBAA;
  font-family: "Helvetica Neue";
  padding: 20px;
}

h1 {
  font-weight: bold;
  font-size: 2em;
  text-align: left;
  color: #c40000;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

thead {
  background-color: #2a2a2a;
  color: white;
}

thead th {
  padding: 15px 20px;
  text-align: left;
  font-size: 1.2em;
}

tbody {
  background-color: #1b1b1b;
}

tr {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Zentriert die Elemente vertikal */
  margin-bottom: 10px; /* Abstand zwischen den Zeilen */
}

td {
  padding: 15px 20px;
  color: rgba(235, 235, 235, 0.64);
  flex: 1;
}

.logo {
  width: 25px;
  height: 25px;
  background: red;
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

</style>