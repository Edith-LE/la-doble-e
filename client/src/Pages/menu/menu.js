import React from 'react'
import { MyContext } from '../../context'



function Menu() {
    return (
        <MyContext.Consumer>
            {context => (
            <div>
                <h1>Menú</h1>  
                {context.state.products.map(product => 
                <div>
                    <p>{product.name}</p>
                    {/* <img key={product.id} src={product.image} alt={product.name} /> */}
                    <p>{product.description} </p>

                </div>
                    
                 )}

            </div>
                
               
                
               
            

            )}

        </MyContext.Consumer>
    )
}

export default Menu
