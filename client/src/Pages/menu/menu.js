import React from 'react'
import { MyContext } from '../../context'
import { Box, NumberInput, Button, Image} from "@chakra-ui/core"
import { GiCupcake } from 'react-icons/gi';
import './style.css'


function Menu() {
    return (
        <div className="menu" >

        <MyContext.Consumer>
            {context => (
                <>
                <h1>Menú</h1> 
                <button onClick={context.displayProducts}>
                    Todos
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
                

                <Box display="flex" width="300px" borderWidth="1px" rounded="lg" overflow="hidden">
                <div style={!context.state.cupcakeVisible ? {display:"none"}: {display:"block"}}>
                {context.state.cupcakes.map(cupcake => 
                <>  
                    <Box
                    mt="2"
                    mb="3"
                    display="flex"
                    alignItems="center"
                    fontWeight="semibold"
                    fontSize="1em"
                    as="h2"
                    lineHeight="tight"
                    isTruncated
                    >
                    {cupcake.name}
                    </Box>

                    <Image key={cupcake.id} src={cupcake.image} alt={cupcake.name} /> 
                    <p>{cupcake.description} </p>
                    <Box>
                     {cupcake.price}
                    <Box as="span" color="gray.600" fontSize="sm">
                    <span>
                    /MXN
                    </span>
                    </Box>
                    </Box>
                    <NumberInput defaultValue={1} min={1} max={9}/> 

                </>  
                 )}
                </div>

                </Box>

                <Box width="300px" borderWidth="1px" rounded="lg" overflow="hidden">

                <div style={!context.state.cakeVisible ? {display:"none"}: {display:"block"}}>
                {context.state.cakes.map(cake => 
                <>  
                    <Box
                    mt="2"
                    mb="3"
                    fontWeight="semibold"
                    fontSize="2em"
                    as="h2"
                    lineHeight="tight"
                    isTruncated
                    >
                    {cake.name}

                    </Box>
                    <Image key={cake.id} src={cake.image} alt={cake.name}  /> 
                    <p>{cake.description} </p>
                    <Box>
                     {cake.price}
                    <Box as="span" color="gray.600" fontSize="sm">
                    <span>
                    /MXN
                    </span>
                    </Box>
                    </Box>
                    <NumberInput defaultValue={1} min={1} max={9}/> 

                </>  
                 )}
                 Email*
                </div>
                </Box>

                <Box width="300px" borderWidth="1px" rounded="lg" overflow="hidden">

                <div style={!context.state.cookieVisible ? {display:"none"}: {display:"block"}}>
                {context.state.cookies.map(cookie => 
                <>
                    <Box
                    mt="2"
                    mb="3"
                    fontWeight="semibold"
                    fontSize="2em"
                    as="h2"
                    lineHeight="tight"
                    isTruncated
                    >
                    {cookie.name}
                    </Box>
                    
                    <Image key={cookie.id} src={cookie.image} alt={cookie.name}  /> 
                    <p>{cookie.description} </p>
                    <Box>
                     {cookie.price}
                    <Box as="span" color="gray.600" fontSize="sm">
                    <span>
                    /MXN
                    </span>
                    </Box>
                    </Box>
                    <NumberInput defaultValue={1} min={1} max={9}/> 
                   

                </>  
                 )}
                </div>
                </Box>

                <Box width="300px" borderWidth="1px" rounded="lg" overflow="hidden">

                 <div style={!context.state.productVisible ? {display:"none"}: {display:"block"}}>

                {context.state.products.map(product => 
                    <>
                    <Box
                    mt="2"
                    mb="3"
                    fontWeight="semibold"
                    fontSize="2em"
                    as="h2"
                    lineHeight="tight"
                    isTruncated
                    >
                    {product.name}
                    </Box>
                    <Image key={product.id} src={product.image} alt={product.name}  /> 
                    <p>{product.description} </p>
                    <Box>
                     {product.price}
                    <Box as="span" color="gray.600" fontSize="sm">
                    <span>
                    /MXN
                    </span>
                    </Box>
                    </Box>
                    <NumberInput defaultValue={1} min={1} max={9}/> 
                    <Button leftIcon={GiCupcake} variantColor="#EDDDD8;" variant="solid">
                    
                    ordenar
                     </Button>

                    </>
                 )}
                 </div>
                </Box>

            
                </>
               
                
               
            

            )}

        </MyContext.Consumer>
        </div>
    )
}

export default Menu
