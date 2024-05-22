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
  <Card class="p-4 grid place-content-center ">
    <img class="rounded" :src="recipe.image" :alt="recipe.label" />
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Llave</TableHead>
          <TableHead>Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(value, key, index) in recipe" :key="index">
          <TableCell>{{key}}</TableCell>
          <TableCell>
            <div v-if="Array.isArray(value)">
              <Badge v-for="(item, i) in value" :key="i">{{item}}</Badge>
            </div>
            <div v-else-if="typeof value === 'object'">
              <div v-for="(subValue, subKey, subIndex) in value" :key="subIndex">
                <strong>{{subKey}}:</strong> {{subValue}}
              </div>
            </div>
            <div v-else>
              {{value}}
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
</template>

<style scoped>

</style>