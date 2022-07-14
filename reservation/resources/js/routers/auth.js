export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/auth/Login'),
    meta: {
      isPublic: true,
      title: {
        i18n: ''
      },
    },
  },
]
