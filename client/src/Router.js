
import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Signup from './Pages/signup/signup'
import Login from './Pages/login/login'
import Profile from './Pages/profile/profile'
import Navbar from './components/Navbar'
import Home from './Pages/home/home'
import Menu from './Pages/menu/menu'


const Router = () => (
    <>
    <Navbar/>

    <Switch>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/menu" component={Menu}/>      

    </Switch>
            
    </>
    
)

export default Router
