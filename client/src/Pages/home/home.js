import React, { Component } from 'react'
import { MyContext } from '../../context'
import { Image, Flex } from "@chakra-ui/core";
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

class Home extends Component{
    render( ){
   
        return (
            <MyContext.Consumer>
                {context => (
                    <div className="home">
                    <Flex  size="500px" align="center" justify="center">

                    <Image src="https://res.cloudinary.com/da1qmmruk/image/upload/v1583257899/la_doble_e_v0ooyj.png" alt="Ladoblee" />
                    </Flex>
                    <Carousel autoPlay width="400px" infiniteLoop="true" showThumbs="false" showStatus="false">
                        <div>
                            <img src="https://res.cloudinary.com/evilvic/image/upload/v1583351800/la%20doble%20e/chocolate.png" />
                            {/* <p>
                                Pasteles
                            </p> */}
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/evilvic/image/upload/v1583351960/la%20doble%20e/fresa.png"/>

                        </div>

                    </Carousel>






                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}

export default Home
 