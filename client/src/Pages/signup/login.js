import React from 'react'
import { MyContext } from '../../context'


function Login() {
  return (
    <MyContext.Consumer>
      {context => (
        
          <form submit={context.handleLoginSubmit} title="Login">
            
            
                
                <input
                  onChange={context.handleLoginInput}
                  placeholder="example@email.com"
                  name="email"
                  type="email"
                  value={context.state.formLogin.email}
                />
             
              
                
                <input
                  onChange={context.handleLoginInput}
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={context.state.formLogin.password}
                />
              
          </form>
       
      )}
    </MyContext.Consumer>
  )
}

export default Login