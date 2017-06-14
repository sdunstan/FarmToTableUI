import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Rooms from '@/components/Rooms'
import Room from '@/components/Room'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
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
    }
  ]
})