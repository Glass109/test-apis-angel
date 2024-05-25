<script setup lang="ts">
import { Button } from '@/components/ui/button'
import type { Recipee } from '@/lib/types'

import { computed, ref, toRefs } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import RecipeCard from '@/components/RecipeCard.vue'
import { useInfoStore } from '@/stores/infoStore'
import { Badge } from '@/components/ui/badge'
import { Toaster } from '@/components/ui/toast'
const { ingestedCalories } = toRefs(useInfoStore())
const query = ref('')
const results = ref<Recipee[] | null>(null)
const url = computed(() => `https://api.edamam.com/search?q=${query.value}&app_id=4076c777&app_key=906c662bae33340fcc2381eb773ba5ad`)
const fetchData = async () => {
  const response = await fetch(url.value)
  const data = await response.json()
  const hits = data.hits
  results.value = hits.map((hit: any) => hit.recipe)
}
</script>

<template>
  <main class="min-h-screen">
    <nav class="p-4 flex justify-evenly items-center">
      <Button as-child>
        <RouterLink to="/">Índice</RouterLink>
      </Button>
      <Badge variant="outline" class="p-1 space-x-2">
        <span class="font-bold">Calorias quemadas diariamente:</span>
        <span class="underline">{{ useInfoStore().getAMR() }}</span>
      </Badge>
      <Badge variant="outline" class="p-1 space-x-2">
        <span class="font-bold">Calorias ingeridas:</span>
        <span class="underline">{{ ingestedCalories }}</span>
      </Badge>
    </nav>
    <Transition name="squash" appear class="container grid place-content-center">
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
    <TransitionGroup appear tag="div">
      <div v-if="results" class="columns-auto md:columns-3 lg:columns-5">
        <RecipeCard v-for="result in results" :recipe="result as Recipee" :key="result.uri" />
      </div>
    </TransitionGroup>
    <Toaster />
  </main>
</template>

<style scoped>
* {
  break-inside: avoid-column;
}

.v-enter-active, .v-leave-active {
  transition: all 0.5s;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
  filter: blur(10px);
}
.squash-enter-active, .squash-leave-active {
  transition: transform 0.5s;
}

.squash-enter-from, .squash-leave-to {
  transform: scale(0);
  position: absolute;
}

</style>