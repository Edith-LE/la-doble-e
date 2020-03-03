import React from 'react'
import { MyContext } from '../../context'
import { FormControl, FormLabel } from '@chakra-ui/core'


function Login() {
  return (
    <MyContext.Consumer>
      {context => (
        
          <form onSubmit={context.handleLoginSubmit} title="Login">
                <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <input
                  onChange={context.handleLoginInput}
                  placeholder="example@email.com"
                  name="email"
                  type="email"
                  value={context.state.formLogin.email}
                />
                </FormControl>
                <FormControl isRequired>
                <FormLabel>Contraseña</FormLabel>
                <input
                  onChange={context.handleLoginInput}
                  placeholder="********"
                  name="password"
                  type="password"
                  value={context.state.formLogin.password}
                />
                </FormControl>           
                 <button> Entrar </button>
              
          </form>
       
      )}
    </MyContext.Consumer>
  )
}

export default Login