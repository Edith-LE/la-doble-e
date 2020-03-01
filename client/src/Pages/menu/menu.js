import React from 'react'
import { MyContext } from '../../context'



function Menu() {
    return (
        <MyContext.Consumer>
            {context => (
                <div>
                <h1>Menú</h1>  
                
               
            {context.state.products.map(product => <p>{product.name}</p>)}
                
                
                </div>
            

            )}

        </MyContext.Consumer>
    )
}

export default Menu
