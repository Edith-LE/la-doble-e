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
        cart: [],
        product: null,
        quantity: 1,
        productToCart:{
            id: null,
            quantity: null,
            name: '',
            description: null,
            image: null,
            typeProduct: null,
            price: ''
        },
        products: [],
        cakes: [],
        cookies: [],
        cupcakes: [],
        cakeVisible: false,
        cupcakeVisible: false,
        cookieVisible: false,
        productVisible: true,
        isLoggedIn: false,
        loggedUser: null,
    }

    addToCart = e => {
        e.preventDefault()
        console.log('si entro');
        
        this.setState(prev => ({
            cart: 
                [...prev.cart, this.state.productToCart]

            
        }
        ))
        console.log('despues del push');
        this.props.history.push('/menu')
        
        // const cart = this.state.cart
        // const { name } = this.state.product
        // console.log(name);
        // this.setState ( {
        //     productToCart:{
        //         name: 'Vic'
        //     }

        // } )
        // this.setState (prevState => ({
        //     ...prevState,
        //         productToCart:{
        //         id: this.state.product._id,
        //         quantity: this.state.quantity,
        //         name: name,
        //         description: this.state.product.description,
        //         image: this.state.product.image,
        //         typeProduct: this.state.product.typeProduct,
        //         price: this.state.product.price
        //     }
        // })

        //  )
        


         // esto estaba comentado
        // this.setState ({


        //     productToCart:{
        //         id: this.state.product._id,
        //         quantity: this.state.quantity,
        //         name: name,
        //         description: this.state.product.description,
        //         image: this.state.product.image,
        //         typeProduct: this.state.product.typeProduct,
        //         price: this.state.product.price
        //     }
            
        // })


        // esto estaba descomentado
        // console.log(this.state);
        
        // for(let i = 0; i < this.state.quantity; i ++){
            
        //     cart.push(this.state.product)
        // }
        // this.setState({ cart: cart})
        // console.log(this.state);  
    }

    handleQuantity = e =>{
        const {name, value} = e.target
        console.log('set state', value);
        
        this.setState(prev => ({
            ...prev,
            productToCart: {
                ...prev.productToCart,
                quantity: value
            }
        }))
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



    componentDidMount = async () =>{
        const {productos} = await PRODUCT_SERVICE.allProducts()
        this.setState(prevState => ({
            ...prevState, 
            products: productos

        }))
        this.getCakes()
        this.getCookie()
        this.getCupcake()
        // this.getProductDetail()
    }

    getCakes = async () =>{
        const {pasteles} = await PRODUCT_SERVICE.cakesProducts()
        this.setState({cakes:pasteles})
    }
    getCookie = async ()=>{
        const {data:{galleta}} = await PRODUCT_SERVICE.cookiesProducts()
        this.setState({cookies: galleta})
    }
    getCupcake = async () => {
        const {data:{panque}} = await PRODUCT_SERVICE.cupcakesProducts()
        this.setState({cupcakes:panque})
    }
    // getProductDetail = async (e, cb) =>{
    //     const { data } = await PRODUCT_SERVICE.productsDetail(e)
    //     this.setState({ productId:data.product._id })
    //     await this.setState({ productsDetail: data.product })
    //     console.log(this.state.productsDetail)
    //     cb()    
    // }
    // postOrder = async () => {
    //     const { data:{user:{orders}}} = await PRODUCT_SERVICE.
        
    // }
    getProduct = async (id) =>{
        const {data:{product}} = await PRODUCT_SERVICE.productsDetail(id)
            this.setState({productToCart: {
                id,
                name: product.name,
                quantity: 0,
                image: product.image
            }})
        console.log('product', product);
        
        this.setState({product:product})
        console.log(this.state);
        
        
    }






    displayCake = e => {
        e.preventDefault ()
        this.setState ({
            cakeVisible: true,
            cupcakeVisible: false,
            cookieVisible:false,
            productVisible: false
        })    
    }

    displayCupcake = e => {
        e.preventDefault ()
        this.setState ({
            cakeVisible: false,
            cupcakeVisible: true,
            cookieVisible:false,
            productVisible: false
        })
         
    }

    displayCoockie = e => {
        e.preventDefault ()
        this.setState ({
            cakeVisible: false,
            cupcakeVisible: false,
            cookieVisible:true,
            productVisible: false
        })
         
    }
    displayProducts = e => {
        e.preventDefault ()
        this.setState ({
            cakeVisible: false,
            cupcakeVisible: false,
            cookieVisible: false,
            productVisible: true
        })

    }




    render(){
        const{
            state,
            handleSignupInput,
            handleSignupSubmit,
            handleLoginInput,
            handleLoginSubmit,
            handleQuantity,
            logout, 
            displayCake,
            displayCupcake,
            displayCoockie,
            displayProducts,
            getProduct,
            addToCart
               
        }= this
        return(
            <MyContext.Provider
            value={{
                state,
                handleSignupSubmit,
                handleSignupInput,
                handleLoginInput,
                handleLoginSubmit,
                handleQuantity,
                logout,
                displayCake,
                displayCupcake,
                displayCoockie,
                displayProducts,
                getProduct,
                addToCart
               
               
            }}
            >
            {this.props.children}
            </MyContext.Provider>
        )
    }
}



export default withRouter(MyProvider)