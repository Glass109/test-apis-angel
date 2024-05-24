<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { computed, ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { GymResult } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const query = ref('')
const results = ref<GymResult | null>(null)
const ejercicios = ref([] as GymResult['results'])
const url = computed(() => `https://wger.de/api/v2/exercise/?name=${query.value}`)
const fetchData = async () => {
  const response = await fetch(url.value)
  console.log(response)
  results.value = await response.json() as GymResult
}
</script>

<template>
  <main class="min-h-screen">
    <nav class="p-4">
      <Button as-child>
        <RouterLink to="/">Índice</RouterLink>
      </Button>
    </nav>
    <Transition name="squash" appear class="container grid place-content-center">
      <div v-if="!results" class="p-4 space-y-2">
        <Label for="query">Ingrese el nombre de algún ejercicio</Label>
        <Input n ame="query" type="text" v-model="query" placeholder="Abdominals" />
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
        <div v-for="Ejercicio in ejercicios" :key="Ejercicio.uuid">
          <Card>
            <CardHeader>
              <CardTitle>{{ Ejercicio.name }}</CardTitle>
              <CardDescription>{{ Ejercicio.description }}</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
          </Card>
        </div>
    </TransitionGroup>
    <div v-if="results && ejercicios.length == 0">
      <p class="text-6xl">No se encontraron resultados :(</p>
    </div>
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