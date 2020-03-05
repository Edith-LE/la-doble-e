import React from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../context'
import { Flex, Box, Menu, MenuButton, MenuList, MenuItem, Button, Image } from '@chakra-ui/core'

const styles = {
  style: {
    padding: '10px',
    color: 'white',
    fontSize: '20px'
  },
  //#041531
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
              h="10vh"
              p="20px"
              bg="#041531"
              align="center"
              justify="center"
              >
              
              <>

                <nav style={{display:"flex"}}>
                  {context.state.isLoggedIn ? (
                    <>
                    <Box>
                      <NavLink {...styles} to="/" exact>
                            Inicio
                      </NavLink>
                    </Box>
                    <Box>
                      <NavLink {...styles} to="/menu" exact>
                            Menu
                      </NavLink>
                    </Box>
                    <Box>
                         <NavLink {...styles} to="/profile" exact>
                           Perfil
                         </NavLink>
                    </Box>
                    <Box>
                         <NavLink {...styles} to="/compra" exact>
                           Carrito
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
  
                     <NavLink {...styles} to="/acerca" exact>
                       Acerca de Nosostros
                     </NavLink>
                     <NavLink {...styles} to="/menu" exact>
                       Menu
                     </NavLink>

               
                     </>
                  )}
                </nav>

                <Flex align="flex-end">

                <Menu>
                    <MenuButton as={Button} rightIcon="chevron-down" marginLeft="400px" >
                      ¡Ordena Ahora!
                    </MenuButton>
                    <MenuList>
                    <MenuItem minH="40px">
                      <Image
                        size="2rem"
                        rounded="full"
                        src="https://res.cloudinary.com/da1qmmruk/image/upload/v1583390467/la_doble_e_cake_atpi6t.png"
                        alt="pastel"
                        mr="12px"
                      />
                    <NavLink  to="/signup" style={{color:"#041531"}} exact>
                       Registrate
                     </NavLink>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <Image
                        size="2rem"
                        rounded="full"
                        src="https://res.cloudinary.com/da1qmmruk/image/upload/v1583390467/la_doble_e_cake_atpi6t.png"
                        alt="pastel"
                        mr="12px"
                      />
                      <NavLink style={{color:"#041531"}} to="/login" exact>
                       Inicia Sesión
                     </NavLink>
                    </MenuItem>
                  </MenuList>
                </Menu>
                </Flex>


              </>
            </Flex>
            )}
          </MyContext.Consumer>
        )  
}


