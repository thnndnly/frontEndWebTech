<script setup lang="ts">
import PokerGameTable from "../components/PokerGameTable.vue";
</script>

<template>
  <main>
    <div class="table">
      <PokerGameTable />
    </div>
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
