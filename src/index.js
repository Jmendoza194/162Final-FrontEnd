import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import SignInForm from './components/SignInForm'
//import Playlist from './components/Playlist'
//import Splash from './components/Splash'


import { Route, BrowserRouter as Router} from 'react-router-dom';



const routing = 
    <Router>
        <Route exact path='/' component={App}/>
        <Route path='/redirect' component = {App}/>

    </Router>

ReactDOM.render(
    routing, document.querySelector('#root')
)

