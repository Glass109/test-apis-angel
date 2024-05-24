
<script setup lang="ts">

import { Button } from '@/components/ui/button'
</script>

<template>
  <main class="grid place-content-center h-screen">
    <div class="grid place-content-center gap-8">
      <Button as-child>
        <RouterLink to="/recetas">Recetas</RouterLink>
      </Button>
      <Button as-child>
        <RouterLink to="/gym">Gym</RouterLink>
      </Button>
    </div>
  </main>
</template>