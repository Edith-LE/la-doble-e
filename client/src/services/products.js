import axios from 'axios'

const baseURL = 'http://localhost:3000'

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
})


const PRODUCT_SERVICE={
    
    allProducts: async () =>{
        const {data} = await MY_SERVICE.get('/menu')
        return data
    }
}

export default PRODUCT_SERVICE
