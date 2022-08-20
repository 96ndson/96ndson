import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoute from '@/routers/auth'
import stores from '@/stores'
import routers from '@/routers'

import Home from '@/pages/Home';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      isLogin: true
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
  const isLogin = to.matched.some(x => x.meta.isLogin)
  const token = stores.getters.getToken
  if (isLogin) {
    if (!token) {
      routers.push({ name: 'login'}, () => {})
    }
  }
  next()
})

export default router