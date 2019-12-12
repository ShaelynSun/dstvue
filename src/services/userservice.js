import Api from '@/services/api'

export default {
  userRegister (user) {
    return Api().post('/reg', user)
  },
  userLogin (user) {
    return Api().post('/login', user)
  }
}
