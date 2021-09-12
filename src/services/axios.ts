import axios from 'axios'

export const baseURL = 'https://api.moedashoje.com.br'

export const api = axios.create({
  baseURL
})
