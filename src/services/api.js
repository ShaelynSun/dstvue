import axios from 'axios'

export default() => {
  return axios.create({
    //    baseURL: 'http://localhost:3000/'
    baseURL: 'https://dst-staging-api.herokuapp.com/'
  })
}
