<script setup lang="ts">
import LoginCard from "@/components/LogIn/LoginCard.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <LoginCard />
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  padding: 50px;
}

.row {
  width: 100%;
}

.column {
  flex: 1;
  max-width: 400px;
}
</style>
