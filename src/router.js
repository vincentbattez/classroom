import Vue from 'vue'
import Router from 'vue-router'
import EventShow from './views/EventShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    }
  ]
})
