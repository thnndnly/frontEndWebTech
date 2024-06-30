<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const router = useRouter();

// Verwende ref für loggedIn, um reactive zu sein
const loggedIn = ref(!!localStorage.getItem('username'));

onMounted(() => {
  // Bei der Montage prüfen, ob ein Benutzer angemeldet ist
  loggedIn.value = !!localStorage.getItem('username');
});
</script>

<template>
  <nav class="custom-navbar">
    <div class="logo-section">
      <router-link to="/main">
        <img alt="Vue logo" class="logo" src="../../assets/PokerLogo2.png" width="80" height="80" />
      </router-link>
    </div>
    <div class="nav-links">
      <ul>
        <!-- Zeige LogIn und Register nur an, wenn loggedIn false ist -->
        <li v-if="!loggedIn">
          <router-link to="/LogIn" title="LogIn">LogIn</router-link>
        </li>
        <li v-if="!loggedIn">
          <router-link to="/Register" title="Register">Register</router-link>
        </li>
        <!-- Zeige Tabelle und Analyse nur an, wenn loggedIn true ist -->
        <li v-if="loggedIn">
          <router-link to="/Tabelle" title="Tabelle">Tabelle</router-link>
        </li>
        <li v-if="loggedIn">
          <router-link to="/Analyse" title="Analyse">Analyse</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed; /* Fixiert die Navbar am oberen Rand */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Stellt sicher, dass die Navbar über anderen Elementen bleibt */
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo {
  max-width: 100%;
  height: auto;
}

.nav-links ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links ul li {
  margin-left: 20px;
}

.nav-links ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.nav-links ul li a:hover {
  text-decoration: underline;
}
</style>
