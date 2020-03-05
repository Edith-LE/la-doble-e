import React from 'react'
import context, { MyContext } from '../../context'
import {  Image, Link, Button  } from "@chakra-ui/core"
import {GiShoppingCart} from 'react-icons/gi'
import './style.css'


function  Detail({history}) {
    return (
        <MyContext.Consumer>
      
            {context=>{
                const {product} = context.state
                if(product)
                return(
                    <>
                    <h1 style={{
                        fontFamily: 'Pacifico', 
                        fontSize:"80px", 
                        color:"#041531",
                        textAlign:"center"
                        }} >
                        {context.state.product.name}  
                    </h1>

                    <section className="section" >

                    <Image rounded="full" src={context.state.product.image} size="400px" />

                    <div className="input">
                    <div className="counter">
                     <button className="counter-change">
                         -
                    </button>   
                    <input className="counter-input" type="number" name="quantity" value={context.state.productToCart.quantity} onChange={context.handleQuantity} />
                    <button className="counter-change">
                         +
                    </button>  

                    </div>
                    
                    <button className="add-button" onClick={context.addToCart}>
                        Agregar
                    </button>

                        </div>
                    </section>
                    {/* <Link onClick={context.addToCart} to={()=> history.push('/compra')}>
                    <Button leftIcon={GiShoppingCart} variantColor="#041531;" variant="solid">
                    Agregar
                    </Button>
                    </Link> */}

                    </>
                )
                else return <p>
                    cargando porque no hay na...
                </p>
            }}
        </MyContext.Consumer>


    )
}

export default Detail
