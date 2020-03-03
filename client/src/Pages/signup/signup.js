import React from 'react'
import { MyContext } from '../../context'
import { 
  FormControl, 
  FormLabel, 
  Input, 
  Flex,
  Button
 } from '@chakra-ui/core'
 import { GiCupcake } from 'react-icons/gi';



function Signup() {
  return (
    <MyContext.Consumer>
      {context => (

                <Flex  bg="#EDDDD8" size="350px" align="center" justify="center">

                
                <form onSubmit={context.handleSignupSubmit} title="Signup">
            
                <FormControl isRequired>
                <FormLabel color="#041531">Nombre</FormLabel>
                
                <Input
                  variant="filled"
                  placeholder="Nombre"
                  name="name"
                  type="text"
                  value={context.state.formSignup.name}
                  onChange={context.handleSignupInput}
                />
                </FormControl>
          
            
                <FormControl isRequired>
                <FormLabel color="#041531">Email</FormLabel>

                <Input
                  variant="filled"
                  onChange={context.handleSignupInput}
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={context.state.formSignup.email}
                />
                </FormControl>
           
         
           
                <FormControl isRequired>
                <FormLabel color="#041531">Contraseña</FormLabel>
                <Input
                  variant="filled"
                  onChange={context.handleSignupInput}
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={context.state.formSignup.password}
                />
                </FormControl>
                <Button variantColor="#041531" variant="ghost">
                Crear cuenta
                </Button>

                  
             
            
          </form>

          </Flex>
        
      )}
    </MyContext.Consumer>
  )
}

export default Signup