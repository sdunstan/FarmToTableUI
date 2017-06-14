import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MeetingList from '@/components/MeetingList'
import Meeting from '@/components/Meeting'
import MeetingDefault from '@/components/MeetingDefault'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '',
      component: MeetingList,
      children: [
        {
          path: '',
          name: 'DefaultMeeting',
          component: MeetingDefault
        },
        {
          path: 'meetings/:id',
          name: 'Meeting',
          component: Meeting
        }
      ]
    }
  ]
})
