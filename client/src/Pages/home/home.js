import React, { Component } from 'react'
import { MyContext } from '../../context'
import { Image, Flex } from "@chakra-ui/core";

class Home extends Component{
    render( ){
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                    <Flex  size="500px" align="center" justify="center">

                    <Image src="https://res.cloudinary.com/da1qmmruk/image/upload/v1583219623/la_doble_e/60d747c1-d218-4901-a885-0b40365e5ade_kvpkht.jpg" alt="Ladoblee" />
                    </Flex>
                    </>
                )}
            </MyContext.Consumer>
        )
    }
}

export default Home
 