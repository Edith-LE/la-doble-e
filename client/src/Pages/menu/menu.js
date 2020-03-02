import React from 'react'
import { MyContext } from '../../context'



function Menu() {
    return (
        <MyContext.Consumer>
            {context => (
            <div>
                <h1>Menú</h1> 
                <button onClick={context.displayProducts}>
                    Productos
                </button> 
                <button onClick={context.displayCake}>
                    Pasteles
                </button> 
                <button onClick={context.displayCupcake}>
                    Cupcakes
                </button> 
                <button onClick={context.displayCoockie}>
                    Pasticería
                </button>


                <div style={!context.state.cupcakeVisible ? {display:"none"}: {display:"block"}}>
                {context.state.cupcakes.map(cupcake => 
                <>
                    <p>{cupcake.name}</p>
                    <img key={cupcake.id} src={cupcake.image} alt={cupcake.name} /> 
                    <p>{cupcake.description} </p>

                </>  
                 )}
                </div>


                <div style={!context.state.cakeVisible ? {display:"none"}: {display:"block"}}>
                {context.state.cakes.map(cake => 
                <>
                    <p>{cake.name}</p>
                    <img key={cake.id} src={cake.image} alt={cake.name} /> 
                    <p>{cake.description} </p>

                </>  
                 )}
                </div>


                <div style={!context.state.cookieVisible ? {display:"none"}: {display:"block"}}>
                {context.state.cookies.map(cake => 
                <>
                    <p>{cake.name}</p>
                    <img key={cake.id} src={cake.image} alt={cake.name} /> 
                    <p>{cake.description} </p>

                </>  
                 )}
                </div>


                 <div style={!context.state.productVisible ? {display:"none"}: {display:"block"}}>

                {context.state.products.map(product => 
                    <>
                    <p>{product.name}</p>
                    <img key={product.id} src={product.image} alt={product.name} /> 
                    <p>{product.description} </p>
                    </>
                 )}
                 </div>

            </div>
                
               
                
               
            

            )}

        </MyContext.Consumer>
    )
}

export default Menu
