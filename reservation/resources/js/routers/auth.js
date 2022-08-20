export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/auth/Login'),
    meta: {
      isLogin: false,
    },
  },

  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/pages/auth/Profile'),
    meta: {
      isLogin: true,
    },
  },
]
