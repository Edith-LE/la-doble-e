import React, { Component } from 'react'
import { MyContext } from '../../context'
import { Image, Flex } from "@chakra-ui/core";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends Component{
    render( ){
   
        return (
            <MyContext.Consumer>
                {context => (
                    <div className="home">
                    <Flex  size="500px" align="center" justify="center">

                    <Image src="https://res.cloudinary.com/da1qmmruk/image/upload/v1583257899/la_doble_e_v0ooyj.png" alt="Ladoblee" />
                    </Flex>

                    


                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}

export default Home
 