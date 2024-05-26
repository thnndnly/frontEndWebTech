<script setup lang="ts">
import TestPokerTable from "@/components/TestPokerTable.vue";
</script>

<template>
  <main>
    <div class="table">
      <TestPokerTable />
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