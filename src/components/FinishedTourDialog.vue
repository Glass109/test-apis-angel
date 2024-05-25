<script setup lang="ts">

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useInfoStore } from '@/stores/infoStore'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
const infoStore = useInfoStore()
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button variant="default">
        Finalizar
      </Button>
    </DialogTrigger>
    <DialogContent as-child>
      <Card :class="infoStore.caloriesDifference < 0 ? 'bg-green-50' : 'bg-red-50'">
        <CardHeader>
          <h1 class="text-2xl">¡Felicidades!</h1>
          <p>Has completado el tour de hoy.</p>
        </CardHeader>
        <CardContent>
          <p>Calorias quemadas: {{ infoStore.getAMR() }}</p>
          <p>Calorias ingeridas: {{ infoStore.ingestedCalories }}</p>
          <p>Calorias restantes: {{ infoStore.caloriesDifference }}</p>
          <mark v-if="infoStore.caloriesDifference < 0">Si sigues así, bajarás de peso!</mark>
          <mark v-else>Oops! Tienes un superávit calórico, rebaja tu consumo de calorías o aumenta el ejercicio extra para compensar!</mark>
        </CardContent>

      </Card>
    </DialogContent>
  </Dialog>
</template>

<style scoped>

</style>