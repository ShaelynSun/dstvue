import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Stories from '@/components/Stories'
import AddStories from '@/components/AddStories'
import Map from '@/components/Map'
import Signup from '../components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/stories',
      name: 'Stories',
      component: Stories
    },
    {
      path: '/story',
      name: 'AddStories',
      component: AddStories
    }
  ]
})
