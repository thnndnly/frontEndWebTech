<script setup lang="ts">

import LogIn from "@/views/LogIn.vue";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/PokerLogo2.png" width="125" height="125" />

    <div class="wrapper">


      <nav>
        <RouterLink to="/LogIn">LogIn</RouterLink>
        <RouterLink to="/Tabelle">Tabelle</RouterLink>
        <RouterLink to="/Analyse">Analyse</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.4;
  max-height: 100vh;
}

.logo-and-title {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
