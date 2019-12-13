import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 初始化时用sessionStore.getItem('user'),这样子刷新页面就无需重新登录
const store = new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    setUsername (state, username) {
      state.username = username
    }
  },
  actions: {
    setUsername ({commit}, username) {
      commit('setUsername', username)
    }
  }
})

export default store
