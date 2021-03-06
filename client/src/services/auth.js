import axios from 'axios'

const baseURL = 'http://localhost:3000'

// https://ladoble-e.herokuapp.com

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
})

const AUTH_SERVICE = {
    signup: async data =>{
        return await MY_SERVICE.post('/signup', data)
    },
    login: async data =>{
        return await MY_SERVICE.post('/login', data)
    },
    logout: async data=>{
        return await  MY_SERVICE.post('logout')
    },

}

export default AUTH_SERVICE


