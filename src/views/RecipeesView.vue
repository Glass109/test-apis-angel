<script setup lang="ts">
import { Button } from '@/components/ui/button'
import type { Recipee } from '@/lib/types'

import { computed, ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import RecipeCard from '@/components/RecipeCard.vue'

const query = ref('')
const results = ref<Recipee[] | null>(null)
const url = computed(() => `https://api.edamam.com/search?q=${query.value}&app_id=4076c777&app_key=906c662bae33340fcc2381eb773ba5ad`)
const fetchData = async () => {
  const response = await fetch(url.value)
  const data = await response.json()
  const hits = data.hits
  const recipees = hits.map((hit: any) => hit.recipe)
  results.value = recipees
}
</script>

<template>
  <main class="min-h-screen">
    <Button as-child class="fixed left-10 top-2">
      <RouterLink to="/">Índice</RouterLink>
    </Button>
    <Transition appear class="container grid place-content-center">
      <div v-if="!results" class="p-4 space-y-2">
        <Label for="query">Ingrese un ingrediente (Inglés)</Label>
        <Input name="query" type="text" v-model="query" placeholder="Potato"/>
        <Button type="button" @click="fetchData">Buscar</Button>
      </div>
      <div v-else>
      <Button size="lg" class="animate-pulse hover:scale-110 z-10 w-32 fixed bottom-[20px] right-[20px]"
              type="button" @click="results = null">
        Buscar de nuevo
      </Button>
      </div>

    </Transition>
    <TransitionGroup appear tag="div" class="columns-auto md:columns-3 lg:columns-5" v-if="results">
      <RecipeCard v-for="result in results" :recipe="result as Recipee" :key="result.uri" />
    </TransitionGroup>
  </main>
</template>

<style scoped>
* {
  break-inside: avoid-column;
}

.v-enter-active, .v-leave-active {
  transition: all 0.5s;
}

.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateY(10px);
  scale: 0.9;
}
</style>