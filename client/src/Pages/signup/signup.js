import React from 'react'
import { MyContext } from '../../context'



function Signup() {
  return (
    <MyContext.Consumer>
      {context => (
        
          <form submit={context.handleSignupSubmit} title="Signup">
            
             
                <input
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={context.state.formSignup.name}
                  onChange={context.handleSignupInput}
                />
          
            
                
                <input
                  onChange={context.handleSignupInput}
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={context.state.formSignup.email}
                />
           
         
           
              
                <input
                  onChange={context.handleSignupInput}
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={context.state.formSignup.password}
                />

                  <button> Crear cuenta </button>
             
            
          </form>
        
      )}
    </MyContext.Consumer>
  )
}

export default Signup