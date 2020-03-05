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
                    <header>

                    

                    <Image className="logo" src="https://res.cloudinary.com/da1qmmruk/image/upload/v1583257899/la_doble_e_v0ooyj.png" alt="Ladoblee" />

                        <h1 style={{fontFamily: 'Pacifico', fontSize:"90px", color:"#041531"}} >
                            Repostería casera
                            <br/>
                             y mas ...
                        </h1>
                        
                    


                    </header>

                    <Flex alignItems="center" justifyContent="space-evenly">

                    <Carousel autoPlay width="400px" infiniteLoop="true" showThumbs="false" showStatus="false">
                        <div>
                            <img src="https://res.cloudinary.com/evilvic/image/upload/v1583367585/la%20doble%20e/tartaleta.png" />
                            {/* <p>
                                Pasteles
                            </p> */}
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/evilvic/image/upload/v1583367732/la%20doble%20e/tartaleta_raspberry.png"/>

                        </div>

                    </Carousel>



                    <Carousel autoPlay width="400px" infiniteLoop="true" showThumbs="false" showStatus="false">
                        <div>
                            <img src="https://res.cloudinary.com/evilvic/image/upload/v1583366783/la%20doble%20e/cupcakes_chocolate.png" />
                            {/* <p>
                                Pasteles
                            </p> */}
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/evilvic/image/upload/v1583366520/la%20doble%20e/cupcakes_fresa.png"/>

                        </div>

                    </Carousel>

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

                    </Flex>



                    







                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}

export default Home
 