import React from 'react'
import context, { MyContext } from '../../context'

function  Detail() {
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
                    <img src={context.state.product.image}/>
                    
                    
                    <input type="number" name="quantity" value={context.state.quantity} onChange={context.handleQuantity} />
                    <button onClick={context.addToCart}>
                        Agregar
                    </button>
                    
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
