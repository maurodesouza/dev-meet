import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cb8f-179-215-100-103.ngrok.io'
})

export { api }
