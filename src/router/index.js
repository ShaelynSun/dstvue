import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Stories from '@/components/story/Stories'
import AddStories from '@/components/story/AddStories'
import Map from '@/components/Map'
import Signin from '@/components/Signin'
import Register from '@/components/Register'
import Edit from '@/components/story/Edit'
import Comments from '@/components/comment/Comments'
import AddComments from '@/components/comment/AddComments'
import Personal from '@/components/Personal'
// import store from '../store/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/personal',
      name: 'Personal Page',
      component: Personal
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/stories',
      name: 'Stories',
      component: Stories
    },
    {
      path: '/comments',
      name: 'Comments',
      component: Comments
    },
    {
      path: '/story',
      name: 'AddStories',
      component: AddStories
    },
    {
      path: '/comment',
      name: 'AddComments',
      component: AddComments
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    }
  ]
})

// 注册全局钩子用来拦截导航
// Router.beforeEach((to, from, next) => {
//   const token = store.state.token
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (token) { // 通过vuex state获取当前的token是否存在
//       next()
//     } else {
//       console.log('You need to login first.')
//       next({
//         path: '/signin'
//         // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   } else {
//     next()
//   }
// })
