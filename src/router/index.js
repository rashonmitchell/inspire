import { createRouter, createWebHistory } from 'vue-router'
// import store from './vuex';
import Home from '../views/app/Home.vue'

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: ifNotAuthenticated,
      component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      beforeEnter: ifNotAuthenticated,
      component: () => import(/* webpackChunkName: "about" */ '../views/auth/Signup.vue')
    },
    {
      path: '/users/:handle',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ '../views/users/UsersProfile.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/users/Notifications.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/app/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(route => route.meta.requiresAuth)) {
    if(store.getters.isAuthenticated) {
      next();
      return
    }
    next({name: 'home'})
  } else {
    next();
  }
})

export default router