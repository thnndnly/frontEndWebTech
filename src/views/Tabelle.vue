<script setup lang="ts">
import PokerGameTable from "@/components/TabelleSeite/PokerGameTable.vue";
/*
import NavBar from "../components/icons/NavigationsLeiste/NavBar.vue";

 */
</script>

<template>
  <main>
    <NavBar />
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

