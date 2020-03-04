import React from 'react'
import context, { MyContext } from '../../context'
import {  Image, Link, Button  } from "@chakra-ui/core"
import {GiShoppingCart} from 'react-icons/gi'

function  Detail({history}) {
    return (
        <MyContext.Consumer>
      
            {context=>{
                const {product} = context.state
                if(product)
                return(
                    <>
                    <h1>
                        {context.state.product.name}  
                    </h1>
                    
                    <Image rounded="full" src={context.state.product.image} size="600px" />
                    
                    
                    <input type="number" name="quantity" value={context.state.productToCart.quantity} onChange={context.handleQuantity} />
                    <button onClick={context.addToCart}>
                        Agregar
                    </button>
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
