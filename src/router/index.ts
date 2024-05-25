import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Bienvenido',
      component: () => import('../views/BienvenidoView.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/comida',
      name: 'comida',
      component: () => import('../views/RecipeesView.vue')
    },
    {
      path: '/gym',
      name: 'gym',
      component: () => import('../views/GymView.vue')
    },
  ]
})

export default router
