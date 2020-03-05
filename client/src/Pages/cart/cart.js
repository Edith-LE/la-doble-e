import React, {useEffect, useContext} from 'react'
import  {MyContext} from '../../context'
import { Flex } from '@chakra-ui/core'
import './style.css'



function Cart() {

    const context = useContext (MyContext)

    useEffect (() => {
        context.totalPrice()
    },
    [context])




    return (
        <MyContext.Consumer>

            {context => (
                <>
                <div className="table">

                <table>
                    <thead>
                        <tr>
                            <th>Postre</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>

                    {context.state.cart.map(product => 
                        <tr>
                            <td> <img src={product.image} alt={product.name} style= {{width:"100px", height:"100px"}} /> </td>
                            <td>{product.name}</td> 
                            <td>{product.quantity}</td>
                            <td> {`$ ${product.price}`} </td>


                        </tr>
                    )}
                    </tbody>
                    <tfoot>

                    <tr>
                        <td colSpan="3" >
                            Total
                        </td>
                        
                        {context.state.totalPrice}
                    </tr>
                    </tfoot>

                </table>
                </div>
                    
                </>
            )}
            
        </MyContext.Consumer>
    )
}

export default Cart
