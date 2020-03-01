import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/auth'
import PRODUCT_SERVICE from './services/products'

export const MyContext = createContext()

class MyProvider extends Component{
    state ={
        formSignup:{
            name: '',
            email: '',
            password:''
        },
        formLogin :{
            email:'',
            password:''
        },
        
        product:{
            name:'',
            description:'',
            image:'',
            typeProduct:'',
            price:''            
        },
        products: null,
        isLoggedIn: false,
        loggedUser: null,
    }


    handleSignupInput = e =>{
        const { name, value} =e.target
        //console.log(name, value)
        this.setState(prevState => ({
            ...prevState,
            formSignup:{
                ...prevState.formSignup,
                [name]: value
            }

        }))
    }
    
    handleSignupSubmit = e =>{
        e.preventDefault()
        const {name, email, password} = this.state.formSignup
        AUTH_SERVICE.signup({name, email, password})
        .then(({data})=> {
            this.setState(prevState => ({
                ...prevState,
                formSignup:{
                    name: '', 
                    email: '',
                    password:''
                }
            }))
            alert('Account created successfully')
            this.props.history.push('/login')
        })
        .catch(() =>{
            alert('Something went wrong')
        })
    }

    handleLoginInput = e =>{
        const { name, value} =e.target
        this.setState(prevState => ({
            ...prevState,
            formLogin:{
                ...prevState.formLogin,
                [name]: value
            }
        }))
    }

    handleLoginSubmit = e => {
        e.preventDefault()
        const {email, password} = this.state.formLogin
        AUTH_SERVICE.login({email, password})
        .then(({ data }) => {
            this.setState(prevState => ({
              ...prevState,
              formLogin: {
                email: '',
                password: ''
              },
              loggedUser: data.user,
              isLoggedIn: true
            }))
            this.props.history.push('/profile')
          })
          .catch(() => {
            alert('Something went wrong')
          })
    }

    logout = async () => {
        this.setState({ isLoggedIn:false })
        await AUTH_SERVICE.logout()
        this.props.history.push("/")
    }

    getAllData = async () => {
       return await PRODUCT_SERVICE.allProducts()
    }

    componentDidMount = async () =>{
        const products = await PRODUCT_SERVICE.allProducts()
        this.setState(prevState => ({
            ...prevState, 
            products: products

        }))
    }




    render(){
        const{
            state,
            handleSignupInput,
            handleSignupSubmit,
            handleLoginInput,
            handleLoginSubmit,
            logout,
            getAllData         
        }= this
        return(
            <MyContext.Provider
            value={{
                state,
                handleSignupSubmit,
                handleSignupInput,
                handleLoginInput,
                handleLoginSubmit,
                logout,
                getAllData
            }}
            >
            {this.props.children}
            </MyContext.Provider>
        )
    }
}



export default withRouter(MyProvider)