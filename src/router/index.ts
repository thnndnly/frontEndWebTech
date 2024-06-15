import { createRouter, createWebHistory } from 'vue-router'
import Abgabe2View from "@/views/Tabelle.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      redirect: '/logIn'
    },
    {

      path: '/LogIn',
      name: 'LogIn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/Tabelle',
      name: 'Tabelle',
      component: () => import('../views/Tabelle.vue')
    },
    {
      path: '/Analyse',
      name: 'Analyse',
      component: () => import('../views/Analyse.vue')
    }
  ]
})

export default router
