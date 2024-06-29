<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <h1 class="headline">Analyse Gameplay</h1>
      <div class="stat-card top-left">
        <h2>€456,78</h2>
        <p>+7,56</p>
      </div>
      <div class="stat-card top-right">
        <h2>{{ mostPlayedGametype }}</h2>
        <p>Most played gametype</p>
      </div>
      <div class="stat-card bottom-left">
        <h2>{{ winRate }}%</h2>
        <p>Winrate</p>
      </div>
      <div class="stat-card bottom-right">
        <h2>{{ totalGames }}</h2>
        <p>Total games</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import axios, { type AxiosResponse } from "axios";

const router = useRouter();

function getOwner() {
  return localStorage.getItem('username') || "";
}

const pokerEntryData: Ref<gameEntry[]> = ref([])

async function fetchGameEntries(owner: string) {
  const url = 'https://allerjutsteswebtechprojekt.onrender.com/pokerGameEntries'
  const endpoint = url + '?owner=' + owner
  console.log('fetch url', endpoint)
  const response: AxiosResponse = await axios.get(endpoint)
  const responseData: gameEntry[] = response.data
  pokerEntryData.value = []
  responseData.forEach((entry: gameEntry) => {
    pokerEntryData.value.push(entry)
  })
}

const totalGames = ref(0)
const winRate = ref(0)
const mostPlayedGametype = ref('')

function calculateWinrate() {
  let wins = 0
  pokerEntryData.value.forEach((entry: gameEntry) => {
    if (entry.cashOut > entry.buyIn) {
      wins++
    }
  })
  return (wins / pokerEntryData.value.length) * 100
}

function getMostPlayedGametype() {
  const gametypes: Record<string, number> = {}
  pokerEntryData.value.forEach((entry: gameEntry) => {
    if (gametypes[entry.gametype]) {
      gametypes[entry.gametype]++
    }
    else {
      gametypes[entry.gametype] = 1
    }
  })
  let max = 0
  let mostPlayed = ''
  for (const gametype in gametypes) {
    if (gametypes[gametype] > max) {
      max = gametypes[gametype]
      mostPlayed = gametype
    }
  }
  return mostPlayed
}

onMounted(async () => {
  await fetchGameEntries(getOwner())
  totalGames.value = pokerEntryData.value.length
  winRate.value = calculateWinrate()
  mostPlayedGametype.value = getMostPlayedGametype()
})
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: rgba(235, 235, 235, 0.64); /* Textfarbe */
  min-height: 100vh; /* Minimum height for full viewport */
}

.dashboard-container {
  background-color: #000000; /* Hintergrundfarbe des Containers */
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 700px; /* Maximale Breite des Containers */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr 1fr; /* Automatische Höhe für die Headline */
  gap: 20px; /* Abstand zwischen den Karten */
  margin: 0 auto; /* Horizontale Zentrierung */
}

.headline {
  grid-column: span 2; /* Überspannt beide Spalten */
  text-align: center;
  font-size: 28px;
  color: darkred; /* Textfarbe der Headline */
  margin-bottom: 20px;
}

.stat-card {
  background-color: #1b1b1b; /* Kartenhintergrundfarbe */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.stat-card h2 {
  margin: 0;
  font-size: 24px;
  color: rgba(235, 235, 235, 0.64); /* Textfarbe */
}

.stat-card p {
  margin: 5px 0 0;
  color: #7f7f7f; /* Sekundäre Textfarbe */
}
</style>