<template>
  <main>
    <div class="about">
      <h1>This is your mom yeah.</h1>
    </div>
    <PokerGameTable/>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
</script>