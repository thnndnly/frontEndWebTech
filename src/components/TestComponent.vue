<script setup lang="ts">

import {onMounted, ref, type Ref} from "vue";
import axios, {type AxiosResponse} from "axios";

  const testItems: Ref<testEntry[]> = ref([])

  async function testLoadItems() {
    const baseUrl = 'https://allerjutsteswebtechprojekt.onrender.com/api/testEntryList'
    const response: AxiosResponse = await axios.get(baseUrl)
    const responseData: testEntry[] = response.data
    responseData.forEach((entry: testEntry) => {
      testItems.value.push(entry)
    })
  }
  onMounted(() => {
    testLoadItems()
  })

</script>

<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="entry in testItems" :key="entry.id">
        <td>{{ entry.id }}</td>
        <td>{{ entry.name }}</td>
        <td>{{ entry.description }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>