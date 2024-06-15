<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.removeItem('UUID');
  localStorage.removeItem('selectedJourney');
  router.push('/login');
};

const toggleTheme = () => {
  // Implementieren Sie Ihre Themenumschaltungsfunktionalität hier
};
</script>

<template>
  <nav class="custom-navbar">
    <div class="container">
      <div class="logo-section">
        <RouterLink to="/main">
          <img src="@/assets/logo2.png" alt="Logo" style="height: 70px;">
        </RouterLink>
      </div>
      <div class="nav-links">
        <ul>
          <li>
            <RouterLink to="/user" title="User">Profile</RouterLink>
          </li>
          <li>
            <RouterLink to="/newjourney" title="Create a new Journey">New Journey</RouterLink>
          </li>
          <li>
            <RouterLink to="/main" title="Main">Main</RouterLink>
          </li>
          <li>
            <a @click="logout" title="Logout" style="cursor: pointer;">Logout</a>
          </li>
          <li>
            <i @click="toggleTheme">Toggle Theme</i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-section img {
  height: 70px;
}

.nav-links ul {
  display: flex;
  list-style-type: none;
}

.nav-links ul li {
  padding: 10px;
  cursor: pointer;
}
</style>

