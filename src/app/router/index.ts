import { createRouter, createWebHistory } from 'vue-router'
import * as widgets from '@/widgets'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: widgets.Landing
    }
  ]
})

export { router }
