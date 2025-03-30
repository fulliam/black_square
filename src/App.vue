<template>
  <div class="container">
    <Square color="black" />
  </div>
</template>

<script setup lang="ts">
import Square from './components/Square.vue'
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}
</style>
