import React, { Component } from 'react'
import { MyContext } from '../../context'
import { Heading, Flex, Image, Text, Button } from "@chakra-ui/core";

function About ({history}) {
    
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                
                <Flex  paddingTop="20px" paddingBottom="30px"  align="center" justify="center">
                <Heading 
                as="h1" 
                size="lg" 
                fontSize="60px" 
                color="#9D7566" 
                justify="center"
                >
                        Un poco de la Doble E

                </Heading>
                </Flex>
                <Flex paddingTop="50px" marginLeft="15vw">
                <Image
                src="https://res.cloudinary.com/da1qmmruk/image/upload/v1583127861/Rebeca_rngfiw.jpg"
                size="300px"
                rounded="full"
                alt="Rebeca"
                />
                <Flex paddingTop="50px" marginLeft="15vw" marginRight="10vw">
                <Text fontSize="2xl" color="#041531">
                    ¿Alguna vez has probado un pastel y nunca lo has vuelto a encontrar?
                    ¿Tienes alguna idea de algún pastel que quisieras probar y no encuentras?
                    ¡La doble E somos pasteles a la carta y mas...!
                    Los pasteles son 100% caseros y horneados al momento.

                    <Flex paddingTop="40px" marginLeft="15vw" marginRight="10vw">
                    <Button 
                    variantColor="#9D7566" 
                    variant="outline"
                    onClick={() => history.push('/menu')} >
                        ¡Conoce nuestros productos!
                    </Button>
                    </Flex>

                </Text>
                </Flex>

                </Flex>

                

                    
                    </>
                )}
            </MyContext.Consumer>
        )
    }


export default About