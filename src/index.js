import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
<<<<<<< HEAD
//import SignInForm from './components/SignInForm'
//import Playlist from './components/Playlist'
//import Splash from './components/Splash'


=======
import SignInForm from './components/SignInForm'
import Playlist from '../src/components/Playlist';
import Splash from '../src/components/Splash';
>>>>>>> 8cb9b66f5bfb9cee697258f1c9d3deca552e7436
import { Route, BrowserRouter as Router} from 'react-router-dom';



const routing = 
    <Router>
<<<<<<< HEAD
        <Route exact path='/' component={App}/>
        <Route path='/redirect' component = {App}/>
=======
        <Route exact path='/' component={Splash}/>
        <Route path='/redirect' component = {Playlist}/>
>>>>>>> 8cb9b66f5bfb9cee697258f1c9d3deca552e7436

    </Router>

ReactDOM.render(
    routing, document.querySelector('#root')
)

