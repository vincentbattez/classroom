import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard.vue'
import ClassroomSingle from '@/pages/classroom/ClassroomSingle.vue'
import ClassroomList from '@/pages/classroom/ClassroomList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    /*———————————————————————————————————*\
        $ DASHBOARD
    \*———————————————————————————————————*/
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    /*———————————————————————————————————*\
        $ CLASSROOM
    \*———————————————————————————————————*/
    {
      path: '/classroom',
      name: 'classroomList',
      component: ClassroomList
    },
    {
      path: '/classroom/:className/:group',
      name: 'classroomSingle',
      component: ClassroomSingle,
      props: true
    }
  ]
})
