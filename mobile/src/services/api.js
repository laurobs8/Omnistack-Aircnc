import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.21.100.209:3333'
})

export default api;