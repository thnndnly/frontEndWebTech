<!-- src/App.vue -->
<template>
  <div id="app">
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';

export default {
  name: 'App',
  components: {
    LandingPage,
  },
};
</script>

<style>
/* Add some global styles if needed */
</style>