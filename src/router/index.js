import Vue from 'vue'
import Router from 'vue-router'
import Rooms from '@/components/Rooms'
import Room from '@/components/Room'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rooms',
      name: 'Rooms',
      component: Rooms,
      children: [
        {
          path: ':roomName',
          name: 'Room',
          component: Room
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: Rooms
    }
  ]
})
