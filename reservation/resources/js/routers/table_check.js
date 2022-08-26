export default [
  {
    path: '/table-check',
    name: 'table_check',
    component: () => import('@/pages/TableCheck'),
    meta: {
      isLogin: true,
    },
  },
  {
    path: '/edit-reservation',
    name: 'edit_reservation',
    component: () => import('@/pages/table_check/EditReservation'),
    meta: {
      isLogin: true,
    },
  },
]
