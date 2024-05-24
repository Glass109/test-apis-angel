<script setup lang="ts">
import {RouterView } from 'vue-router'
</script>

<template>
  <Transition>
    <RouterView />
  </Transition>
</template>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: all 0.5s;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
  filter: blur(10px);
}


</style>
