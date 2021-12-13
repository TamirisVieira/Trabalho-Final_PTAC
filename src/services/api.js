import axios from 'axios'

const api = axios.create({
	baseURL: 'https://meuapp-1.tamirisvieira.repl.co/'
})

export default api