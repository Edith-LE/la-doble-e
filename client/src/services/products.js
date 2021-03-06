import axios from 'axios'

const baseURL = 'http://localhost:3000'

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
})


const PRODUCT_SERVICE={
    
    allProducts: async () =>{
        const {data} = await MY_SERVICE.get('/menu')
        // console.log(data)
        return data
    },
    cakesProducts: async () => {
        const{data} = await MY_SERVICE.get('/pasteles')
        return data
    },
    cupcakesProducts: async ()=>{
        return await MY_SERVICE.get('/cupcakes')
    },
    cookiesProducts: async () =>{
        return await MY_SERVICE.get('/pasticeria')
    },
    productsDetail: async (id) => {
        return await MY_SERVICE.get(`/detail/${id}`)
    },
    createOrder: async data =>{
        return await MY_SERVICE.post('/orden', data)
    }   

}




export default PRODUCT_SERVICE
