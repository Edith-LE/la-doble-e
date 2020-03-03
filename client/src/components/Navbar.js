import React from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../context'
import { Flex, Box } from '@chakra-ui/core'

const styles = {
  style: {
    padding: '20px',
    color: 'white',
    fontSize: '20px'
  },
  activeStyle: {
    color: '#cab28e'
  },
  box:{
    bg:'#C5C4C6'
  }


}

export default function Navbar (){
    return ( 
        <MyContext.Consumer>
            {context => (
              
              <Flex
              w="100vw"
              h="20vh"
              p="30px"
              bg="#041531"
              align="center"
              justify="center"
              >
              
              <>

                <nav style={{marginTop:"20px"}}>
                  {context.state.isLoggedIn ? (
                    <>
                    <Box>
                      <NavLink {...styles} to="/" exact>
                            Inicio
                      </NavLink>
                    </Box>
                    <Box>
                         <NavLink {...styles} to="/profile" exact>
                           Perfil
                         </NavLink>
                    </Box>
                         <button onClick={context.logout} {...styles}>
                           Salir
                         </button>
                         </>
                  ) : (
                    <>
                    <NavLink {...styles}  to="/" exact>
                       Inicio
                     </NavLink>
                     <NavLink {...styles} to="/menu" exact>
                       Menu
                     </NavLink>
                     <NavLink {...styles} to="/signup" exact>
                       Registrate
                     </NavLink>
                     <NavLink {...styles} to="/login" exact>
                       Inicia Sesión
                     </NavLink>
                     <NavLink {...styles} to="/acerca" exact>
                       Acerca de Nosostros
                     </NavLink>
                     </>
                  )}
                </nav>
              </>
            </Flex>
            )}
          </MyContext.Consumer>
        )  
}


