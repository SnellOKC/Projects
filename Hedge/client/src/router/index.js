import Vue from 'vue'
import Router from 'vue-router'
import addpost from '@/components/AddPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: addpost,
      name: 'addpost'
    }
  ]
})
