<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loginData = reactive({
  email: '',
  password: ''
});
</script>

<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <h1 class="headline">Analyse Gameplay</h1>
      <div class="stat-card top-left">
        <h2>€ 456,78</h2>
        <p>+7,56</p>
      </div>
      <div class="stat-card top-right">
        <h2>SPIN&GO</h2>
        <p>Most played gametype</p>
      </div>
      <div class="stat-card bottom-left">
        <h2>47%</h2>
        <p>Winrate</p>
      </div>
      <div class="stat-card bottom-right">
        <h2>578912</h2>
        <p>Total games played</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #ffffff; /* Textfarbe */
  min-height: 100vh; /* Minimum height for full viewport */
}

.dashboard-container {
  background-color: #252525; /* Hintergrundfarbe des Containers */
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 600px; /* Maximale Breite des Containers */
  height: 400px; /* Feste Höhe des Containers */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr 1fr; /* Automatische Höhe für die Headline */
  gap: 20px; /* Abstand zwischen den Karten */
}

.headline {
  grid-column: span 2; /* Überspannt beide Spalten */
  text-align: center;
  font-size: 28px;
  color: #e0e0e0; /* Textfarbe der Headline */
  margin-bottom: 20px;
}

.stat-card {
  background-color: #2a2a2a; /* Kartenhintergrundfarbe */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.stat-card h2 {
  margin: 0;
  font-size: 24px;
  color: #e0e0e0; /* Textfarbe */
}

.stat-card p {
  margin: 5px 0 0;
  color: #7f7f7f; /* Sekundäre Textfarbe */
}
</style>
