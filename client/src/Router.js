import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Signup from './Pages/signup/signup'
import Login from './Pages/signup/login'



const Router = () => (
    <>
    <Switch>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profile}/>

    </Switch>
            
    </>
    
)

export default Router
