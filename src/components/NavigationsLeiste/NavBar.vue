<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <nav class="custom-navbar">
    <div class="logo-section">
      <RouterLink to="/main">
        <img alt="Vue logo" class="logo" src="../../assets/PokerLogo2.png" width="80" height="80" />
      </RouterLink>
    </div>
    <div class="nav-links">
      <ul>
        <li>
          <RouterLink to="/LogIn" title="LogIn">LogIn</RouterLink>
        </li>
        <li>
          <RouterLink to="/Tabelle" title="Tabelle">Tabelle</RouterLink>
        </li>
        <li>
          <RouterLink to="/Tabelle2" title="Tabelle2">Tabelle2</RouterLink>
        </li>
        <li>
          <RouterLink to="/Analyse" title="Analyse">Analyse</RouterLink>
        </li>
        <li>
          <RouterLink to="/Register" title="Register">Register</RouterLink>
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
