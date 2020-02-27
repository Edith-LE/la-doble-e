import React, { Component } from 'react'
import { MyContext } from '../../context'

class Home extends Component{
    render( ){
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                    <h1>
                        Inicio
                    </h1>
                    </>
                )}
            </MyContext.Consumer>
        )
    }
}

export default Home
 