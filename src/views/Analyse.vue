<script setup lang="ts">
import Analyse from "../components/icons/AnalyseSeite/Analysee.vue"; // Sicherstellen, dass der Pfad korrekt ist
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <Analyse />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 50px;
}

.row {
  width: 100%;
}

.column {
  flex: 1;
  max-width: 400px;
}
</style>

