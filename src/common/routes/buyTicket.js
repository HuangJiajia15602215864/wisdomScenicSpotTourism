// 购票模块 ==================
const ticketReservation = () => import('@/views/ticket/ticket-reservation.vue')
const editTourist = () => import('@/views/ticket/edit-tourist.vue')

const buyTicket = [
  {
    path: '/ticketReservation',
    name: 'ticketReservation',
    component: ticketReservation,
    meta: {
      level: 1,
      isRequireAuth: true,
      title: '门票预订' //  网页title
    }
  },
  {
    path: '/ticketReservation/editTourist',
    name: 'editTourist',
    component: editTourist,
    meta: {
      level: 2,
      isRequireAuth: false,
      title: '编辑游客' //  网页title
    }
  }

]
export default buyTicket
