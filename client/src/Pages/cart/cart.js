import React from 'react'
import context, {MyContext} from '../../context'



function Cart() {
    return (
        <MyContext.Consumer>
            {context => (
                <>
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
                            <td> {product.price} </td>
                            <td>{product.quantity}</td>


                        </tr>
                    )}
                    </tbody>

                </table>
                    
                </>
            )}
            
        </MyContext.Consumer>
    )
}

export default Cart
