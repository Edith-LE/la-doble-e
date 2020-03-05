import React from 'react'
import { MyContext } from '../../context'
import { 
  FormControl, 
  FormLabel, 
  Flex, 
  Input,
  Heading,
  Button,
  Link

 } from '@chakra-ui/core'
import './style.css'
import {GiCakeSlice} from 'react-icons/gi'


function Login() {
  return (
    <div className="login">

    <MyContext.Consumer>
      {context => (
                <div className="form">
                <Flex  bg="#EDDDD8" size="350px" align="center" justify="center">

          <form onSubmit={context.handleLoginSubmit} title="Login">


                <FormControl isRequired>


                <Flex align="center"  justify="center">

                <Heading paddingBottom="20px">
                  Inicia sesión
                </Heading>
                </Flex>

                <FormLabel>Email</FormLabel>
                <Input
                  onChange={context.handleLoginInput}
                  placeholder="example@email.com"
                  name="email"
                  type="email"
                  value={context.state.formLogin.email}
                />
                </FormControl>
                <FormControl isRequired>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  onChange={context.handleLoginInput}
                  placeholder="********"
                  name="password"
                  type="password"
                  value={context.state.formLogin.password}
                />
                </FormControl>  
                <Flex align="center" justify="center" paddingTop="20px">
                <Link onClick={() => context.handleLoginSubmit}>
                 <button  leftIcon={GiCakeSlice} >
                    Entrar
                 </button>
                </Link>
                </Flex>         
              
              </form>



                </Flex>
                  
                </div>

        
       
      )}
    </MyContext.Consumer>
    </div>
  )
}

export default Login