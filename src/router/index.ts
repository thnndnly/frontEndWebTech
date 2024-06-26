import { createRouter, createWebHistory } from 'vue-router'

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
      component: () => import('../views/Tabelle.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/Tabelle2',
      name: 'Tabelle2',
        component: () => import('../views/Tabelle2.vue')
    }  ,
    {
      path: '/Analyse',
      name: 'Analyse',
      component: () => import('../views/Analyse.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('../views/Register.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('nutzername')

  // https://sentry.io/answers/how-do-i-check-for-an-empty-undefined-null-string-in-javascript/
  if(to.meta.requiresAuth && !isAuthenticated) {
    next('/LogIn')
  }
  else {
    next()
  }
})

export default router
