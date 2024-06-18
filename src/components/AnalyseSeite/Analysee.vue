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
    <div class="dashboard-header">
      <div class="stat-card">
        <h2>€ 456,78</h2>
        <p>+7,56</p>
      </div>
      <div class="stat-card">
        <h2>SPIN&GO</h2>
        <p>Most played gametype</p>
      </div>
      <div class="stat-card">
        <h2>47%</h2>
        <p>Winrate</p>
      </div>
      <div class="stat-card">
        <h2>578912</h2>
        <p>Total games played</p>
      </div>
    </div>
    <div class="dashboard-body">
      <div class="chart-row">
        <div class="chart-card">
          <!-- First chart content here -->
        </div>
        <div class="chart-card">
          <!-- Second chart content here -->
        </div>
      </div>
      <div class="chart-row">
        <div class="chart-card full-width">
          <!-- Third chart content here -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b1b1b; /* Hintergrundfarbe */
  padding: 20px;
  color: #ffffff; /* Textfarbe */
  min-height: 100vh; /* Minimum height for full viewport */
}

.dashboard-header {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
}

.stat-card {
  background-color: #2a2a2a; /* Kartenhintergrundfarbe */
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  flex: 1;
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

.dashboard-body {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.chart-row {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
}

.chart-card {
  background-color: #2a2a2a; /* Kartenhintergrundfarbe */
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  flex: 1;
  min-height: 300px; /* Mindesthöhe für Diagramme */
}

.chart-card.full-width {
  flex: 1 1 100%;
}
</style>
