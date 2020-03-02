import React, { Component } from 'react'
import { MyContext } from '../../context'
import { Image, Flex } from "@chakra-ui/core";

class Home extends Component{
    render( ){
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                    <Flex  size="800px" align="center" justify="center">

                    <Image src="https://res.cloudinary.com/da1qmmruk/image/upload/v1583131662/LaDobleE_o3q8a3.png" alt="Ladoblee" />
                    </Flex>
                    </>
                )}
            </MyContext.Consumer>
        )
    }
}

export default Home
 