import { defineStore } from 'pinia'
import { computed } from 'vue'

interface InfoPersona {
  isMale: boolean
  age: number | null
  weight: number | null
  height: number | null
  activityMultiplier: number | string | null
  ingestedCalories: number,
  burnedCalories: number
}

export const useInfoStore = defineStore('infoStore', {
  state: (): InfoPersona => ({
    activityMultiplier: null,
    age: null,
    height: null,
    isMale: false,
    weight: null,
    ingestedCalories: 0,
    burnedCalories: 0
  }),
  getters: {
    caloriesDifference(state): number {
      return state.ingestedCalories - useInfoStore().getAMR() - state.burnedCalories
    }
  },
  actions: {
    getBasalMetabolicRate () : number {
      // Mifflin St. Jeor Equation
      // Es hombre
      if (this.isMale) {
        return 10 * (this.weight ?? 0) + 6.25 * (this.height ?? 0) - 5 * (this.age ?? 0) + 5
      }
      // Es mujer
      return 10 * (this.weight ?? 0) + 6.25 * (this.height ?? 0) - 5 * (this.age ?? 0) - 161
    },
    getAMR () : number {
      return this.getBasalMetabolicRate() * (this.activityMultiplier as number ?? 0)
    },
    updateMultiplierFromString (value: string) {
      this.activityMultiplier = parseFloat(value).toPrecision(6)
    },
  }
})