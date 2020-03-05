import React from 'react'
import { MyContext } from '../../context'
import { 
  FormLabel, 
  Input, 
  Flex,
  Button,
  FormControl,
  Heading,
 } from '@chakra-ui/core'
 import { GiCupcake } from 'react-icons/gi';
 import './style.css'
 



function Signup() {
  return (
    <div className="signup">
    <MyContext.Consumer>
      {context => (
                <div className="form">

                <Flex  bg="#EDDDD8" size="350px" align="center" justify="center">

                
                <form onSubmit={context.handleSignupSubmit} title="Signup">
                
            
                <FormControl isRequired>

                <Flex align="center" justify="center">

                <Heading paddingBottom="20px">
                  Regístrate
                </Heading>
                </Flex>

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
              
                <Button onClick={context.handleSignupSubmit} variantColor="#041531" paddingBottom="20px">
                Crear cuenta
                </Button>

                  
             
            
              </form>

            </Flex>
        </div>



)}
    </MyContext.Consumer>
    </div>
  )
}

export default Signup