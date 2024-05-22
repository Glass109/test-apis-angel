
<script setup lang="ts">

import { Button } from '@/components/ui/button'
</script>

<template>
  <main class="grid place-content-center h-screen">
    <ul>
      <Button as-child>
        <RouterLink to="/recetas">Recetas</RouterLink>
      </Button>
    </ul>
  </main>
</template>