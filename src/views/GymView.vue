<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { computed, ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {Badge} from '@/components/ui/badge'
import type { GymResult } from '@/lib/types'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { rand } from '@vueuse/shared'
import { useInfoStore } from '@/stores/infoStore'
import FinishedTourDialog from '@/components/FinishedTourDialog.vue'

const query = ref('')
const results = ref<GymResult | null>(null)
const ejercicios = ref([] as GymResult['results'])
const url = computed(() => `https://wger.de/api/v2/exercise/?name=${query.value}`)
const randomCalories : number = rand(300, 900)
const fetchData = async () => {
  const response = await fetch(url.value)
  results.value = await response.json() as GymResult
  ejercicios.value = results.value.results
}
</script>

<template>
  <main class="min-h-screen">
    <nav class="p-4 flex justify-evenly items-center">
      <Button as-child>
        <RouterLink to="/">Índice</RouterLink>
      </Button>
      <Badge variant="outline" class="p-1 space-x-2">
        <span class="font-bold">Calorias ingeridas en el día:</span>
        <span class="underline">{{ useInfoStore().ingestedCalories }}</span>
      </Badge>
      <Badge variant="outline" class="p-1 space-x-2">
        <span class="font-bold">Calorias usadas normalmente</span>
        <span class="underline">{{ useInfoStore().getAMR() }}</span>
      </Badge>
      <Badge variant="outline" class="p-1 space-x-2">
        <span class="font-bold">Calorias quemadas con ejercicio extra:</span>
        <span class="underline">{{ useInfoStore().burnedCalories }}</span>
      </Badge>
      <Badge variant="outline" class="p-1 space-x-2">
        <span class="font-bold">Calorias ganadas/perdidas totales</span>
        <span class="underline">{{ useInfoStore().caloriesDifference }}</span>
      </Badge>
      <FinishedTourDialog />
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
    <TransitionGroup appear tag="div" class="columns-2">
        <div v-for="Ejercicio in ejercicios" :key="Ejercicio.uuid">
          <Card>
            <CardHeader>
              <CardTitle>{{ Ejercicio.name }}</CardTitle>
              <CardDescription>{{ Ejercicio.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="destructive">Quema calórica {{ randomCalories }}</Badge>
            </CardContent>
            <CardFooter>
              <Button @click="useInfoStore().burnedCalories += randomCalories">¡Agregar ejercicio!</Button>
            </CardFooter>
          </Card>
        </div>
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