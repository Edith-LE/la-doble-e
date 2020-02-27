import React, {useEffect, useContext} from 'react'
import {MyContext} from '../../context'

function Profile({ history }) {
    
    const context = useContext(MyContext)
    console.log(context);
    
    
    useEffect(()=> {
        if(!context.state.isLoggedIn) return history.push('/login')
    })

    return (
        <MyContext.Consumer>
            {context =>{
                const { isLoggedIn, loggedUser} = context.state
                if (isLoggedIn)
                return(
                    <div>
                        <h2>Perfil</h2>
                        <h3> { loggedUser.name} </h3>
                    </div>
                )
                else return  (
                <> 
                Loading ...
                </>
                )}}
        </MyContext.Consumer>
    )
}

export default Profile