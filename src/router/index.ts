import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Abgabe2View from "@/views/Abgabe2View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/abgabe2',
      name: 'abgabe2',
      component: () => import('../views/Abgabe2View.vue')
    },
    {
      path: '/testview',
      name: 'testview',
      component: () => import('../views/TestPokerTableView.vue')
    }
  ]
})

export default router
