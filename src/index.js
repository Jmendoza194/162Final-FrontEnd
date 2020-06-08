import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignInForm from './components/SignInForm'
import Playlist from '../src/components/Playlist';
import Splash from '../src/components/Splash';
import { Route, BrowserRouter as Router} from 'react-router-dom';



const routing = 
    <Router>
        <Route exact path='/' component={Splash}/>
        <Route path='/redirect' component = {Playlist}/>

    </Router>

ReactDOM.render(
    routing, document.querySelector('#root')
)