import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 初始化时用sessionStore.getItem('user'),这样子刷新页面就无需重新登录
const state = {
  user: window.sessionStorage.getItem('username')
}
const mutations = {
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.username = data
    window.sessionStorage.setItem('username', data)
  },
  LOGOUT: (state) => {
    // 登出的时候要清除用户名
    state.username = null
    window.sessionStorage.removeItem('username')
  }
}

const actions = {
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
