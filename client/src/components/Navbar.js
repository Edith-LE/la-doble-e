import React from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../context'

export default function Navbar (){
    return ( 
        <MyContext.Consumer>
            {context => (
              <>
                <nav>
                  {context.state.isLoggedIn ? (
                    <>
                    <NavLink to="/" exact>
                           Inicio
                         </NavLink>
                         <NavLink to="/profile" exact>
                           Perfil
                         </NavLink>
                         <button onClick={context.logout}>
                           Salir
                         </button>
                         </>
                  ) : (
                    <>
                    <NavLink to="/" exact>
                       Inicio
                     </NavLink>
                     <NavLink to="/menu" exact>
                       Menu
                     </NavLink>
                     <NavLink  to="/signup" exact>
                       Registrate
                     </NavLink>
                     <NavLink to="/login" exact>
                       Inicia Sesión
                     </NavLink>
                     </>
                  )}
                </nav>
              </>
             
            )}
          </MyContext.Consumer>
        )  
}


