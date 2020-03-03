import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import MyProvider from './context'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from './theme'
import * as serviceWorker from './serviceWorker';


function WithTheme(){
    return (
        <ThemeProvider theme={theme}>
            <CSSReset/> 
            <Router/>
        </ThemeProvider>
    )
}

function WhitContext (){
    return (
        <BrowserRouter>
        <MyProvider>
            <WithTheme/>
        </MyProvider>
        </BrowserRouter>
    )
}

ReactDOM.render(<WhitContext />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
