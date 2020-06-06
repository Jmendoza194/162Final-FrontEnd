import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignInForm from './components/SignInForm'

import { Route, BrowserRouter as Router} from 'react-router-dom';



const routing = 
    <Router>
        <Route exact path='/' component={SignInForm}/>
        <Route path='/Home' component = {App}/>
    </Router>

ReactDOM.render(
    routing, document.querySelector('#root')
)