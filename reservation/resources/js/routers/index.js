import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoute from '@/routers/auth'

import Home from '@/pages/Home';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      login: true
    },
  },
  ...authRoute

]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(x => !x.meta.login)
  const isAuthenticated = true;
  /*if (requiresAuth && !isAuthenticated) {
    // next('login');
  } else if (to.path === '/login' && isAuthenticated) {
    // next('/')
  } else {

  }*/
  next()
})

export default router