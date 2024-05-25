<script setup lang="ts">
import { useInfoStore } from '@/stores/infoStore'
import { computed, toRefs } from 'vue'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

const { age, height, isMale, weight } = toRefs(useInfoStore())
const AMR = computed(() => useInfoStore().getAMR())

</script>

<template>
  <main class="grid place-content-center h-screen">
    <Card class="bg-card">
      <CardHeader>
        <CardTitle class="text-4xl">Bienvenido</CardTitle>
        <CardDescription>
          Hola, bienvenido a la aplicación de nutrición, por favor llena los siguientes campos para poder ayudarte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Label>¿Cuantos años tienes?</Label>
        <Input v-model="age" type="number" placeholder="25" min="0" max="100" />
        <Label>¿Cual es tu peso en kg?</Label>
        <Input v-model="weight" type="number" placeholder="60" />
        <Label>¿Cual es tu altura en cm?</Label>
        <Input v-model="height" type="number" />
        <div class="my-4 flex justify-center gap-8">
          <Label for="isMale">¿Eres hombre?</Label>
          <Checkbox class="size-5" name="isMale" v-model:checked="isMale" />
        </div>
        <Label>¿Cual es tu actividad física?</Label>
        <Select @update:model-value="(value : string) => useInfoStore().updateMultiplierFromString(value)">
          <SelectTrigger>
            <SelectValue placeholder="Selecciona una..."></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1.2">
                Sedentaria
              </SelectItem>
              <SelectItem value="1.375">
                Algo activa
              </SelectItem>
              <SelectItem value="1.55">
                Moderadamente activa
              </SelectItem>
              <SelectItem value="1.725">
                Activa
              </SelectItem>
              <SelectItem value="1.9">
                Muy Activa
              </SelectItem>
            </SelectGroup>
          </SelectContent>
          <small class="text-slate-500">Tu actividad física es importante para calcular tu requerimiento
            calórico</small>
        </Select>
        <div class="w-full text-center">
          <h1>Tu AMR es:</h1>
          <h2 class="text-4xl">{{AMR}}</h2>
        </div>
      </CardContent>
      <CardFooter class="grid place-content-center">
        <Button as-child>
          <RouterLink to="/comida">Continuar</RouterLink>
        </Button>
        <small class="text-slate-500">No te preocupes, puedes cambiarlo más adelante</small>
      </CardFooter>
    </Card>
  </main>
</template>

<style scoped>

</style>