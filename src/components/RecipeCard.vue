<script setup lang="ts">
import { Card } from '@/components/ui/card'
import type { Recipee } from '@/lib/types'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {Badge} from '@/components/ui/badge'
defineProps<{
  recipe: Recipee;
}>()
</script>

<template>
  <Card class="p-4 flex flex-col">
    <img class="rounded" :src="recipe.image" :alt="recipe.label" />
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Llave</TableHead>
          <TableHead>Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableRow>
        <TableCell>Nombre:</TableCell>
        <TableCell>{{recipe.label}}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ingredientes</TableCell>
        <TableCell>
          <ul class="ml-4 list-disc">
            <li v-for="(ingredient, index) in recipe.ingredientLines" :key="index">{{ingredient}}</li>
          </ul>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Precauciones</TableCell>
        <TableCell>
          <ul>
            <Badge v-for="(caution, index) in recipe.cautions" :key="index">{{caution}}</Badge>
          </ul>
        </TableCell>
      </TableRow>
    </Table>
  </Card>
</template>

<style scoped>

</style>