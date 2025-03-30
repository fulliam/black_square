
<template>
  <div class="sqare" :style="{ backgroundColor: color }" />
</template>

<script setup lang="ts">
defineProps<{ color: string }>()
</script>

<style scoped>
.sqare {
  width: 20rem;
  height: 20rem;
}
</style>
