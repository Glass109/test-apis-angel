<script setup lang="ts">
import { Card } from '@/components/ui/card'
import type { Recipee } from '@/lib/types'
import { Table, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { ref, toRefs } from 'vue'
import { useInfoStore } from '@/stores/infoStore'
import {Button} from '@/components/ui/button'
import { useToast } from '@/components/ui/toast'

const imgLoaded = ref(false)
const { ingestedCalories } = toRefs(useInfoStore())
const {toast} = useToast()

defineProps<{
  recipe: Recipee;
}>()
const addToCalories = (calories : number) => {
  ingestedCalories.value += parseFloat(calories.toPrecision(2))
  toast({
    title: 'Calorias ingeridas',
    description: `Se han agregado ${calories} calorias`, })
}
</script>

<template>
  <Card class="p-4 flex flex-col">
    <img v-show="imgLoaded"
         class="rounded h-64 w-full"
         :src="recipe.image"
         :alt="recipe.label"
         @load="imgLoaded = true"
    />
    <div v-show="!imgLoaded" class="h-64 w-full bg-gray-200 animate-pulse"></div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Llave</TableHead>
          <TableHead>Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableRow>
        <TableCell>Nombre:</TableCell>
        <TableCell>{{ recipe.label }}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Calorias por porcion:</TableCell>
        <TableCell class="underline">{{ recipe.calories }}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cocina:</TableCell>
        <TableCell>
          <ul class="ml-4 list-disc">
            <Badge v-for="(cousine, index) in recipe.cuisineType" :key="index">{{ cousine.toUpperCase() }}</Badge>
          </ul>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ingredientes</TableCell>
        <TableCell>
          <ul class="ml-4 list-disc">
            <li v-for="(ingredient, index) in recipe.ingredientLines" :key="index">{{ ingredient }}</li>
          </ul>
        </TableCell>
      </TableRow>
      <TableRow v-if="recipe.dietLabels.length">
        <TableCell>Dietas</TableCell>
        <TableCell>
          <ul class="ml-4 list-disc">
            <Badge variant="outline" v-for="(dietLabels, index) in recipe.dietLabels" :key="index">{{ dietLabels }}
            </Badge>
          </ul>
        </TableCell>
      </TableRow>
      <TableRow v-if="recipe.cautions.length">
        <TableCell>Precauciones</TableCell>
        <TableCell>
          <ul>
            <Badge v-for="(caution, index) in recipe.cautions" :key="index">{{ caution }}</Badge>
          </ul>
        </TableCell>
      </TableRow>
    </Table>
    <Button @click="addToCalories(recipe.calories)">
      Agregar a la dieta
    </Button>
  </Card>
</template>

<style scoped>

</style>